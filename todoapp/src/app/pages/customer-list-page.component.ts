import { Component } from "@angular/core";
import { CustomersService } from "../api/customers.service";
import { Customers } from "../types/customers";

@Component({
  selector: "app-customer-list-page",
  template: `
    <app-customers
      [customers]="customers"
    ></app-customers>
    <app-customer-form (onAddFullName)="addFullName($event)"></app-customer-form>
    `
})

export class CustomerListPageComponent {
  customers: Customers = [];

  constructor(private service: CustomersService) { }

  fullName: string = '';
  email: string = '';

  ngOnInit() {
    this.service.
    findAllCustomers()
      .subscribe((customers) => this.customers = customers)
  }

  addFullName(object : any){
    this.fullName = object.fullName;
    this.email = object.email;
    this.addCustomer()
  }
  /*addEmail(email: string){
    this.email = email
    this.addCustomer()
  }*/

  addCustomer() {
    this.service.createCustomer(this.fullName, this.email)
      .subscribe((customers) => this.customers.push(customers[0]));
  }
}
