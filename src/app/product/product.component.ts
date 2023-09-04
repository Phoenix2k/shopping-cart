import type { OnDestroy, OnInit } from '@angular/core';
import type { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import type { Product } from '../../types';
import { ApiService } from '../api.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  public product: Product | null = null;
  private apiSub: Subscription | null = null;
  private routeSub: Subscription | null = null;

  constructor(
    private api: ApiService,
    private logger: LoggerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params?.subscribe((params) => {
      this.apiSub = this.api.getProduct(+params['id']).subscribe((response) => {
        this.logger.debug('Product received from API:', response);
        this.product = response;
      });
    });
  }

  ngOnDestroy() {
    this.apiSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
}
