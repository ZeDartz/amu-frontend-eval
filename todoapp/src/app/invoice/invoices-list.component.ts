import { Component, Input } from "@angular/core";
import {Invoices} from "../models/invoices";
import {ActivatedRoute} from "@angular/router";
import {InvoicesService} from "../api/invoices.service";
import {Customer} from "../models/customers";

@Component({
  selector: 'app-invoices-list',
  template: `
    <div style="padding-top: 20px" class="centered-element">
      <table class="table">
        <thead>
        <tr>
          <th colspan="3">Liste des factures</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of invoices">
          <td>
            <label>
              {{ item.amount }}
            </label>
          </td>
          <td>
            <label *ngIf="item.status">
              Payée
            </label>
            <label *ngIf="!item.status">
              Envoyée
            </label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <a routerLink="/{{custid}}/invoices/add"><button type="button" class="btn btn-primary">Créer une facture</button></a>
    `,
  styles: ['table,td {padding:15px; border: 1px solid #333;}thead,tfoot {background-color: #333;color: #fff;}']
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
