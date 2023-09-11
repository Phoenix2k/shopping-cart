import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { type Subscription } from 'rxjs';

import { type Product } from '@schemas';
import { ApiService, LoggerService } from '@services';
import Utils from '@utils';

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
    this.logger.log(`Fetching products…`);
    this.apiSub = this.api.getProducts()?.subscribe((response) => {
      this.logger.debug('Response from API:', response);
      this.logger.info(
        response?.products?.length
          ? 'Products received successfully.'
          : 'No products found.',
      );
      this.products = response.products;
    });
  }

  ngOnDestroy(): void {
    this.apiSub?.unsubscribe();
  }
}
