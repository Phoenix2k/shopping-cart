import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiService } from '../api.service';
import { ProductListComponent } from './product-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [ApiService, HttpClient, HttpHandler],
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
