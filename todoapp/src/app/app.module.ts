import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CustomersComponent} from "./customer/customers.component";
import {CustomerFormComponent} from "./customer/customer-form.component";
import {CustomersService} from "./api/customers.service";
import {InvoicesService} from "./api/invoices.service";
import {CustomerListPageComponent} from "./customer/pages/customer-list-page.component";
import {CustomerDetailsPageComponent} from "./customer/pages/customer-details-page.component";
import {RouterModule, Routes} from "@angular/router";
import {CustomerFormPageComponent} from "./customer/pages/customer-form-page.component";
import {InvoicesListComponent} from "./invoice/invoices-list.component";
import {InvoiceFormPageComponent} from "./invoice/pages/invoice-form-page.component";
import {InvoiceFormComponent} from "./invoice/invoice-form.component";

const routes: Routes = [
  { path: '', component: CustomerListPageComponent },
  { path: 'create', component: CustomerFormPageComponent },
  { path: ':id', component: CustomerDetailsPageComponent },
  { path: ':id/invoices/add', component: InvoiceFormPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFormComponent,
    CustomerFormPageComponent,
    CustomerListPageComponent,
    CustomerDetailsPageComponent,
    InvoicesListComponent,
    InvoiceFormComponent,
    InvoiceFormPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService, InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
