import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppRoutingModule } from '@app';
import { AddToCartComponent, LinkButtonComponent } from '@components';
import { HeaderComponent } from '@layout';
import {
  ApiService,
  CartService,
  LoggerService,
  SessionStorageService,
} from '@services';
import {
  CheckoutComponent,
  ProductComponent,
  ProductListComponent,
} from '@views';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AddToCartComponent,
    AppComponent,
    CheckoutComponent,
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
  providers: [
    [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
    [{ provide: LOCALE_ID, useValue: 'en-US' }],
    ApiService,
    CartService,
    LoggerService,
    SessionStorageService,
  ],
})
export class AppModule {}
