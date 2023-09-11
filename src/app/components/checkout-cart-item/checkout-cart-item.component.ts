import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type CartItem, type Product } from '@schemas';
import { LoggerService } from '@services';
import Utils from '@utils';

/** Maximum amount of products a customer can buy. */
const MAX_PRODUCTS_PER_CUSTOMER = 10;

@Component({
  selector: 'app-checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrls: ['./checkout-cart-item.component.css'],
})
export class CheckoutCartItemComponent {
  @Input({ required: true }) cartItem: CartItem | undefined = undefined;
  @Output() amountChange: EventEmitter<CartItem> = new EventEmitter();
  @Output() removeItem: EventEmitter<Product> = new EventEmitter();

  public calculatePrice = Utils.calculatePrice;
  public formatProductTitle = Utils.formatProductTitle;
  public getCurrency = Utils.getCurrency;

  constructor(private logger: LoggerService) {}

  public handleAmountChange(event: Event, product: Product): void {
    const amount = parseInt((event.target as HTMLSelectElement).value);
    this.amountChange.emit({ product, amount });
  }

  public handleRemoveItem(event: Event, product: Product): void {
    event?.preventDefault();
    this.removeItem.emit(product);
  }

  public productAmounts(product: Product): number[] {
    this.logger.debug(
      'Determining max amount based on product availability:',
      product,
    );
    const maxAmount =
      product.stock <= MAX_PRODUCTS_PER_CUSTOMER
        ? product.stock
        : MAX_PRODUCTS_PER_CUSTOMER;
    this.logger.debug(`Max amount for product ID ${product.id}:`, maxAmount);
    return [
      ...Array(
        maxAmount + 1, // Account for 0
      ).keys(),
    ];
  }
}
