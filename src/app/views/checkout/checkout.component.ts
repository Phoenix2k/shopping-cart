import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';

import { Title } from '@angular/platform-browser';
import { Product } from '@schemas';
import { CartService } from '@services/cart/cart.service';
import { LoggerService } from '@services/logger/logger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnDestroy, OnInit {
  private cartSub: Subscription | null = null;
  public products: Product[] = [];

  constructor(
    private cartService: CartService,
    private logger: LoggerService,
    private title: Title,
  ) {}

  public showProducts(): string {
    return JSON.stringify(this.products, null, 2);
  }

  ngOnInit(): void {
    this.cartSub = this.cartService.products.subscribe((response) => {
      this.logger.debug('Response from cart service:', response);
      this.products = response;
      this.title.setTitle('Checkout');
    });
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }
}
