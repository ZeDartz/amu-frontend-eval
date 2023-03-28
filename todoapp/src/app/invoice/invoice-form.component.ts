import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-invoice-form",
  template: `
    <h1>Créer une facture</h1>
    <br>
    <a routerLink="/">retour au menu</a>
    <br>
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <input
        formControlName="amount"
        type="text"
        name="amount-text"
        placeholder="Montant de la facture"
      />
      <br>
      <select [formControl]="status">
        <option *ngFor="let stat  of objectStatus" [value]="stat.value">{{stat.value}}</option>
      </select>
      <br>
      <br>
      <button>Enregistrer la facture</button>
    </form>
  `
})
export class InvoiceFormComponent {

  objectStatus = [
    {value :"Envoyée"},
    {value :"Payée"}
  ];

  @Output()
  onAddInvoice = new EventEmitter<any>();
  custid: number;
  form : FormGroup;
  amount = new FormControl();
  status = new FormControl(this.objectStatus[0].value);
  constructor(private route: ActivatedRoute) {
    this.custid = Number(this.route.snapshot.paramMap.get('id'));
    this.form = new FormGroup({
      amount : this.amount,
      status : this.status
    });
  }

  onSubmit() {
    let status : boolean = this.form.value.status == "Payée";
    let amount : number = this.form.value.amount;
    this.onAddInvoice.emit({amount : amount, status : status, custid: this.custid});
  }
}
