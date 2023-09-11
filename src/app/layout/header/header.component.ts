import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '@services';

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
    this.productSub = this.cartService.cartItems.subscribe((cartItems) => {
      this.amount = cartItems.reduce((a, c) => a + c.amount, 0);
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
