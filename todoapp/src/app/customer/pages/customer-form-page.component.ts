import { Component } from "@angular/core";
import { CustomersService } from "../../api/customers.service";
import { Customers } from "../../models/customers";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-list-page",
  template: `
    <app-customer-form (onAddFullName)="addCustomer($event)"></app-customer-form>
    `
})

export class CustomerFormPageComponent {
  customers: Customers = [];

  constructor(private service: CustomersService, private router: Router) { }

  addCustomer(object : any) {
    let fullName = object.fullName;
    let email = object.email;
    this.service.createCustomer(fullName, email)
      .subscribe((customers) => this.customers.push(customers[0]));
    this.router.navigate(['/']);
  }
}
