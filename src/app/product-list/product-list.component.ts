import type { OnDestroy, OnInit } from '@angular/core';
import type { Subscription } from 'rxjs';
import { Component } from '@angular/core';

import type { Product } from '../../types';
import { ApiService } from '../api.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  private apiSub: Subscription | null = null;

  constructor(
    private api: ApiService,
    private logger: LoggerService,
  ) {}

  ngOnInit() {
    this.apiSub = this.api.getProducts()?.subscribe((response) => {
      this.logger.debug('Products received from API:', response.products);
      this.products = response.products;
    });
  }

  ngOnDestroy() {
    this.apiSub?.unsubscribe();
  }
}
