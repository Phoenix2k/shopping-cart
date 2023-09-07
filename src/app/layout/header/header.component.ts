import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '@services/cart/cart.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy, OnInit {
  private productSub: Subscription | null = null;

  public amount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productSub = this.cartService.products.subscribe((products) => {
      this.amount = products.length;
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
