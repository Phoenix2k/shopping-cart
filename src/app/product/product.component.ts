import type { OnDestroy, OnInit } from '@angular/core';
import type { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import type { Product } from '../../types';
import { ApiService } from '../api.service';
import { LoggerService } from '../logger.service';
import Utils from '../../utils';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.css'],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
    this.routeSub = this.route.params?.subscribe((params) => {
      this.apiSub = this.api.getProduct(+params['id']).subscribe((response) => {
        this.logger.debug('Product received from API:', response);
        this.product = response;
        this.titleService.setTitle(Utils.formatProductTitle(this.product));
      });
    });
  }

  ngOnDestroy() {
    this.apiSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
}
