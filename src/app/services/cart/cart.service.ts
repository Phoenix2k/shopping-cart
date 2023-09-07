import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductSchema, type Product } from '../../../schemas';
import { LoggerService } from '../logger/logger.service';
import { SessionStorageService } from '../session-storage/session-storage.service';

const KEY_CART_SERVICE = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _products = new BehaviorSubject<Product[]>([]);

  public products = this._products.asObservable();

  constructor(
    private logger: LoggerService,
    private sessionStorage: SessionStorageService,
  ) {
    try {
      this.logger.log('Attempting to restore cart from sessionStorage…');
      const previousCart: Product[] = JSON.parse(
        this.sessionStorage.getItem(KEY_CART_SERVICE) ?? '[]',
      );
      if (ProductSchema.array().safeParse(previousCart).success) {
        this._products.next(ProductSchema.array().parse(previousCart));
      }
      this.logger.debug('Previous products:', this._products.value);
      this.logger.info(
        this._products.value.length
          ? 'Cart restored successfully.'
          : 'No previous cart detected.',
      );
    } catch (error) {
      this.logger.info('Unable to restore previous cart.');
      this.logger.error(error);
      this.resetCart();
    }
  }

  public addToCart(product: Product): void {
    try {
      const parsedProduct = ProductSchema.parse(product);
      this.logger.debug('Adding product to cart:', parsedProduct);
      this._products.next([...this._products.value, parsedProduct]);
    } catch (error) {
      this.logger.error('Unable to add product to cart:', product);
      this.logger.error(error);
    }
    this.saveCart();
  }

  public removeFromCart(product: Product): void {
    this._products.next(
      this._products.value.filter((p) => p.id !== product.id),
    );
    this.saveCart();
  }

  public resetCart(): void {
    this.sessionStorage.removeItem(KEY_CART_SERVICE);
    this._products.next([]);
  }

  public saveCart(): void {
    this.sessionStorage.setItem(KEY_CART_SERVICE, this._products.value);
  }
}
