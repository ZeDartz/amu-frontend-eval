import { Component } from "@angular/core";
import { CustomersService } from "../../api/customers.service";
import { Customers } from "../../models/customers";

@Component({
  selector: "app-customer-list-page",
  template: `
    <div class="text-center">
      <img src="https://freepngimg.com/save/64058-united-dollar-sign-states-design-icon/1600x1600" alt="" width="72" height="57">
      <h1>Bienvenue sur la Factur'App</h1>
      <p class="lead">Vous pouvez consulter la liste des clients ci-dessous</p>
      <app-customers
        [customers]="customers"
      ></app-customers>
    </div>
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
