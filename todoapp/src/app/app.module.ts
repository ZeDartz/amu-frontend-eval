import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CustomersComponent} from "./customer/customers.component";
import {CustomerFormComponent} from "./customer/customer-form.component";
import {CustomersService} from "./api/customers.service";
import {InvoicesService} from "./api/invoices.service";
import {CustomerListPageComponent} from "./pages/customer-list-page.component";
import {CustomerDetailsPageComponent} from "./pages/customer-details-page.component";
import {RouterModule, Routes} from "@angular/router";
import {CustomerFormPageComponent} from "./pages/customer-form-page.component";

const routes: Routes = [
  { path: '', component: CustomerListPageComponent },
  { path: 'create', component: CustomerFormPageComponent },
  { path: ':id', component: CustomerDetailsPageComponent },
  //{ path: ':id/invoices/add', component: InvoicesFormPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFormComponent,
    CustomerFormPageComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService, InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
