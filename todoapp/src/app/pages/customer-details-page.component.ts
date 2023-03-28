import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Customer} from "../types/customers";
import {CustomersService} from "../api/customers.service";

@Component({
  selector: 'app-customer-details-page',
  template: `
    <ng-container *ngIf="customer">
      <h2>Fiche de {{ customer.fullName }}</h2>
      <br>
      <h3>{{ customer.email}}</h3>
      <a routerLink="/">Retour aux clients</a>
    </ng-container>
    <p *ngIf="!customer">En cours de chargement</p>
    <app-invoices-list [custid]="custid"></app-invoices-list>
  `
})
export class CustomerDetailsPageComponent {
  customer?: Customer;
  custid!: number;
  constructor(private route: ActivatedRoute, private service: CustomersService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.service
      .findOneCustomer(id)
      .subscribe(customers => this.customer = customers[0]);

    this.custid = id;
  }
}
