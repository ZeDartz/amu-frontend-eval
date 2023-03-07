import { Component } from '@angular/core';
import { Customers } from "./types/customers";
import { HttpClient } from "@angular/common/http";
import { API_KEY, API_URL_CUST } from "./api/codes"
import {CustomersService} from "./api/customers.service";
@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <h1>La Todo App</h1>

      <main>
        <app-customers
          [customers]="customers"
        ></app-customers>
        <app-customer-form (onAddFullName)="addFullName($event)" (onAddEmail)="addEmail($event)"></app-customer-form>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  customers: Customers = [];

  fullName: string = '';
  email: string = '';

  constructor(private http: HttpClient, private service: CustomersService) {}
  ngOnInit() {
    this.service.
    findAllCustomers()
      .subscribe((customers) => this.customers = customers)
  }

  addFullName(fullName: string){
    this.fullName = fullName;
  }
  addEmail(email: string){
    this.email = email
    this.addCustomer()
  }
  addCustomer() {
    this.service.createCustomer(this.fullName, this.email)
      .subscribe((customers) => this.customers.push(customers[0]));
  }
}
