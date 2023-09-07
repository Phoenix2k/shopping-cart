import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { type Product } from '@schemas';
import { CartService } from '@services/cart/cart.service';

@Component({
  selector: 'app-add-to-cart',
  styleUrls: ['./add-to-cart.component.css'],
  templateUrl: './add-to-cart.component.html',
})
export class AddToCartComponent {
  @Input({ required: true }) product: Product | null = null;

  public addToCartForm = new FormGroup({
    'product-id': new FormControl('', [Validators.required]),
  });

  constructor(private cartService: CartService) {}

  addToCart(): void {
    if (!this.product) return;
    this.cartService.addToCart(this.product);
  }
}
