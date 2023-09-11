import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartItemsSchema, type CartItem, type Product } from '@schemas';
import { LoggerService, SessionStorageService } from '@services';

/** Key used to store cart in sessionStorage. */
const KEY_CART_SERVICE = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItem[]>([]);
  public cartItems = this.cartItems$.asObservable();

  constructor(
    private logger: LoggerService,
    private sessionStorage: SessionStorageService,
  ) {
    try {
      this.logger.log('Attempting to restore cart from sessionStorage…');
      const previousCart: CartItem[] = JSON.parse(
        this.sessionStorage.getItem(KEY_CART_SERVICE) ?? '[]',
      );
      if (CartItemsSchema.safeParse(previousCart).success) {
        this.cartItems$.next(CartItemsSchema.parse(previousCart));
      }
      this.logger.debug('Previous products:', this.cartItems$.value);
      this.logger.info(
        this.cartItems$.value.length
          ? 'Cart restored successfully.'
          : 'No previous cart detected.',
      );
    } catch (error) {
      this.logger.info('Unable to restore previous cart.');
      this.logger.error(error);
      this.resetCart();
    }
  }

  public addProductToCart(product?: Product | null): void {
    if (!product) return;
    const existingAmount =
      this.cartItems$.value.find((c) => c.product.id === product.id)?.amount ??
      0;
    try {
      this.updateAmount(product, existingAmount + 1);
    } catch (error) {
      this.logger.error('Unable to add product to cart:', product);
      this.logger.error(error);
    }
  }

  public removeFromCart(product: Product): void {
    this.logger.info('Removing all products from cart:', product);
    this.cartItems$.next(
      this.cartItems$.value.filter((c) => c.product.id !== product.id),
    );
  }

  public resetCart(): void {
    this.sessionStorage.removeItem(KEY_CART_SERVICE);
    this.cartItems$.next([]);
  }

  public saveCart(): void {
    this.sessionStorage.setItem(KEY_CART_SERVICE, this.cartItems$.value);
  }

  public updateAmount(product: Product, amount: number): void {
    if (0 === amount) return this.removeFromCart(product);
    const existingIndex = this.cartItems$.value.findIndex(
      (c) => c.product.id === product.id,
    );
    if (-1 === existingIndex) {
      this.logger.debug('Adding product to cart:', product);
      this.cartItems$.next([
        ...(this.cartItems$.value ?? []),
        { amount: 1, product },
      ]);
    } else {
      this.logger.debug('Updating product amount in cart:', product);
      const updatedCartItems = [...(this.cartItems$.value ?? [])];
      updatedCartItems[existingIndex].amount = amount;
      this.cartItems$.next(updatedCartItems);
    }
    this.saveCart();
  }
}
