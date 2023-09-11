import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, type Subscription } from 'rxjs';

import { CartItem, type Product } from '@schemas';
import { CartService, LoggerService } from '@services';
import Utils from '@utils';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnDestroy, OnInit {
  private cartSub: Subscription | null = null;

  public calculatePrice = Utils.calculatePrice;
  public calculateTotals = Utils.calculateTotals;
  public cartItems = new BehaviorSubject<CartItem[]>([]);
  public getCurrency = Utils.getCurrency;
  public removeFromCart = this.cartService.removeFromCart;

  constructor(
    private cartService: CartService,
    private logger: LoggerService,
    private title: Title,
  ) {}

  public handleAmountChange(product: Product, newAmount: number): void {
    const currentAmount =
      this.cartItems.value.find((c) => c.product.id === product.id)?.amount ??
      0;
    this.logger.table({
      'Current amount': currentAmount,
      'New amount': newAmount,
      'T/F': currentAmount < newAmount,
    });
    this.cartService.updateAmount(product, newAmount);
  }

  public handleRemove(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  ngOnInit(): void {
    this.title.setTitle('Checkout');
    this.cartSub = this.cartService.cartItems.subscribe((cartItems) => {
      this.logger.debug('Cart items from cart service:', cartItems);
      this.cartItems.next(cartItems);
    });
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }
}
