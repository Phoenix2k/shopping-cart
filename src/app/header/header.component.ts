import { Component, OnDestroy, type OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy, OnInit {
  private productSub: Subscription | null = null;

  public amount = 0;

  constructor(private cartService: CartService) {}

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.productSub = this.cartService.products.subscribe((products) => {
      this.amount = products.length;
    });
  }
}
