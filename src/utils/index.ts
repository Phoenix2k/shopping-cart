import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { type CartItem, type Product } from '@schemas';

export default class Utils {
  /**
   * Calculates the price for a product.
   * @example '1000'
   */
  static calculatePrice({
    product: { discountPercentage, price },
    amount,
  }: CartItem): number {
    return parseFloat(
      ((price - price * (discountPercentage / 100)) * amount).toFixed(2),
    );
  }

  /**
   * Calculates the total price of all products in the cart.
   * @example '1000'
   */
  static calculateTotals(cartItems: CartItem[]): number {
    if (!cartItems) return 0;
    return cartItems.reduce(
      (a, cartItem) => a + this.calculatePrice(cartItem),
      0,
    );
  }

  /**
   * Formats product categories.
   * @example 'smartphones' => 'Smartphones'
   */
  static formatProductCategory(product: Product): string {
    switch (product.category) {
      case 'home-decoration':
        return 'Home decoration';
      default:
        return product.category.replace(/\b\w/g, (l) => l.toUpperCase());
    }
  }

  /**
   * Formats product titles by combining the brand with the title.
   * @example 'Apple iPhone X'
   */
  static formatProductTitle(product: Product): string {
    const titleWithoutBrand = product.title.replace(product.brand + ' ', '');
    return `${product.brand} ${titleWithoutBrand}`;
  }

  /**
   * Gets the currency of the current locale.
   * @example 'EUR'
   */
  static getCurrency(): string {
    return DEFAULT_CURRENCY_CODE.toString();
  }
}
