import { Component, Input } from "@angular/core";
import {Invoices} from "../types/invoices";
import {ActivatedRoute} from "@angular/router";
import {InvoicesService} from "../api/invoices.service";
import {Customer} from "../types/customers";

@Component({
  selector: 'app-invoices-list',
  template: `
    <div>
      <div *ngFor="let item of invoices">
        <label>
          {{ item.amount }}
        </label>
        <label *ngIf="item.status">
          Payée
        </label>
        <label *ngIf="!item.status">
          Envoyée
        </label>
      </div>
    </div>
    <a routerLink="/{{custid}}/invoices/add">Créer une facture</a>
    `,
  styles:[]
})
export class InvoicesListComponent {
  @Input()
  invoices : Invoices = [];
  @Input()
  custid?: number;
  constructor(private route: ActivatedRoute, private service: InvoicesService) { }

  ngOnInit() {
    const custid: number = Number(this.route.snapshot.paramMap.get('id'));
    this.service
      .findInvoiceFromCustomer(custid)
      .subscribe((invoices) => this.invoices = invoices)
  }
}
