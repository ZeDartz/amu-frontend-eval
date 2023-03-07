import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CustomersComponent} from "./customers.component";
import {CustomerFormComponent} from "./customer-form.component";
import {CustomersService} from "./api/customers.service";
import {InvoicesService} from "./api/invoices.service";



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomersService, InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
