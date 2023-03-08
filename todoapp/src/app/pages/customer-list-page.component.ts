import { Component } from "@angular/core";
import { CustomersService } from "../api/customers.service";
import { Customers } from "../types/customers";

@Component({
  selector: "app-customer-list-page",
  template: `
    <app-customers
      [customers]="customers"
    ></app-customers>
    `
})

export class CustomerListPageComponent {
  customers: Customers = [];

  constructor(private service: CustomersService) { }


  ngOnInit() {
    this.service.
    findAllCustomers()
      .subscribe((customers) => this.customers = customers)
  }
}
