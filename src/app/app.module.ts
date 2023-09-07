import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ApiService } from './services/api/api.service';
import { CartService } from './services/cart/cart.service';
import { LoggerService } from './services/logger/logger.service';
import { SessionStorageService } from './services/session-storage/session-storage.service';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';
import { LinkButtonComponent } from './shared/link-button/link-button.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductComponent } from './views/product/product.component';

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
