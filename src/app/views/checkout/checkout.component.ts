import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';

import { Title } from '@angular/platform-browser';
import { type CartProduct, type Product } from '@schemas';
import { CartService } from '@services/cart/cart.service';
import { LoggerService } from '@services/logger/logger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnDestroy, OnInit {
  private cartSub: Subscription | null = null;

  public cartProducts: CartProduct[] = [];
  public products: Product[] = [];

  constructor(
    private cartService: CartService,
    private logger: LoggerService,
    private title: Title,
  ) {}

  public countProducts(productId: number): number {
    return this.products.filter((product) => product.id === productId).length;
  }

  public cartProductsToString(): string {
    return JSON.stringify(this.cartProducts, null, 2);
  }

  ngOnInit(): void {
    this.title.setTitle('Checkout');
    this.cartSub = this.cartService.products.subscribe((response) => {
      this.logger.debug('Response from cart service:', response);
      this.products = response;
      this.cartProducts = (
        Object.values(
          response.reduce((a, c) => Object.assign(a, { [c.id]: c }), {}),
        ) as Product[]
      ).map((product) => ({ amount: this.countProducts(product.id), product }));
      this.logger.debug('Cart products after mapping:', this.cartProducts);
    });
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }
}
