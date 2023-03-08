import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Customer} from "../types/customers";
import {CustomersService} from "../api/customers.service";

@Component({
  selector: 'app-customer-details-page',
  template: `
    <ng-container *ngIf="customer">
      <h2>{{ customer.fullName }}</h2>
      <strong>Mail : </strong>
      {{ customer.email}}
      <br />
      <a routerLink="/">Retour aux tâches</a>
    </ng-container>

    <p *ngIf="!customer">En cours de chargement</p>
  `
})
export class CustomerDetailsPageComponent {
  customer?: Customer;
  constructor(private route: ActivatedRoute, private service: CustomersService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.service
      .findOneCustomer(id)
      .subscribe(customers => this.customer = customers[0]);
  }
}