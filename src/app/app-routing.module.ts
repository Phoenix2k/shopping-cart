import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CheckoutComponent,
  ProductComponent,
  ProductListComponent,
} from '@views';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
