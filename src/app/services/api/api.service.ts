import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Observable } from 'rxjs';

import { type Product } from '../../../schemas';

export interface ResponseProducts {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

@Injectable()
export class ApiService {
  private productApi = 'https://dummyjson.com/product';
  private productsApi = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.productApi}/${productId}`, {
      observe: 'body',
      responseType: 'json',
    });
  }

  getProducts(): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(this.productsApi, {
      observe: 'body',
      responseType: 'json',
    });
  }
}
