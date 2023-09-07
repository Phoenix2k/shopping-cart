import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { type Subscription } from 'rxjs';

import { type Product } from '../../../schemas';
import Utils from '../../../utils';
import { ApiService } from '../../services/api/api.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.css'],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnDestroy, OnInit {
  private apiSub: Subscription | null = null;
  private routeSub: Subscription | null = null;

  public formatProductCategory = Utils.formatProductCategory;
  public formatProductTitle = Utils.formatProductTitle;
  public product: Product | null = null;

  constructor(
    private api: ApiService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params?.subscribe((params) => {
      const productId: number = +params['id'];
      this.logger.log(`Fetching product ${productId}…`);
      this.apiSub = this.api.getProduct(productId).subscribe((response) => {
        this.logger.debug('Response from API:', response);
        this.logger.info(
          response ? 'Product received successfully.' : 'Product not found.',
        );
        this.product = response;
        this.titleService.setTitle(Utils.formatProductTitle(this.product));
      });
    });
  }

  ngOnDestroy(): void {
    this.apiSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
}
