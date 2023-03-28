import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {Invoices} from "../types/invoices";
import {InvoicesService} from "../api/invoices.service";

@Component({
  selector: "app-invoice-list-page",
  template: `
    <app-invoice-form (onAddInvoice)="addInvoice($event)"></app-invoice-form>
    `
})

export class InvoiceFormPageComponent {
  invoices: Invoices = [];
  constructor(private service: InvoicesService, private router: Router) { }

  addInvoice(object : any) {
    let amount = object.amount;
    let status = object.status;
    let custid = object.custid;
    this.service.createInvoice(amount, status, custid)
      .subscribe((invoices) => this.invoices.push(invoices[0]));
    this.router.navigate(['/']);
  }
}
