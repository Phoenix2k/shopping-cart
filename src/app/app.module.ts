import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from './cart.service';
import { HeaderComponent } from './header/header.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { LoggerService } from './logger.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SessionStorageService } from './session-storage.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AddToCartComponent,
    AppComponent,
    HeaderComponent,
    LinkButtonComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, CartService, LoggerService, SessionStorageService],
})
export class AppModule {}
