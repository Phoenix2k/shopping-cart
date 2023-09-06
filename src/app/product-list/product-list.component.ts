import type { OnDestroy, OnInit } from '@angular/core';
import type { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import type { Product } from '../../schemas';
import { ApiService } from '../api.service';
import { LoggerService } from '../logger.service';
import Utils from '../../utils';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnDestroy, OnInit {
  private apiSub: Subscription | null = null;

  public formatProductCategory = Utils.formatProductCategory;
  public formatProductTitle = Utils.formatProductTitle;
  public products: Product[] = [];

  constructor(
    private api: ApiService,
    private logger: LoggerService,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Shopping Cart');
  }

  ngOnInit(): void {
    this.apiSub = this.api.getProducts()?.subscribe((response) => {
      this.logger.debug('Products received from API:', response.products);
      this.products = response.products;
    });
  }

  ngOnDestroy(): void {
    this.apiSub?.unsubscribe();
  }
}
