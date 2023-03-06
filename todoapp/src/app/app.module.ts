import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {CustomersComponent} from "./customers.component";
import {CustomerFormComponent} from "./customer-form.component";


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
