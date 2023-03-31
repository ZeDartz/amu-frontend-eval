import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-invoice-form",
  template: `
    <h1>Créer une facture</h1>
    <br>
    <a routerLink="/"><button type="button" class="btn btn-primary">Retour au menu</button></a>
    <br>
    <form style="padding-top: 20px" (ngSubmit)="onSubmit()" [formGroup]="form">
        <input
          formControlName="amount"
          type="amount"
          class="form-control"
          name="amount"
          placeholder="Montant de la facture"
        />
        <span style="color: red" *ngIf="amountForm && amountForm.invalid && amountForm.touched">Montant invalide</span>
      <br>
      <select name="status" class="form-select" [formControl]="status">
        <option *ngFor="let stat  of objectStatus" [value]="stat.value">{{stat.value}}</option>
      </select>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Enregistrer la facture</button>
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
  amount = new FormControl('',[Validators.required,Validators.min(5),Validators.max(99999)]);
  status = new FormControl(this.objectStatus[0].value);
  constructor(private route: ActivatedRoute) {
    this.custid = Number(this.route.snapshot.paramMap.get('id'));
    this.form = new FormGroup({
      amount : this.amount,
      status : this.status
    });
  }
  get amountForm(){
    return this.form.get('amount')
  }

  onSubmit() {
    let status : boolean = this.form.value.status == "Payée";
    let amount : number = this.form.value.amount;
    this.onAddInvoice.emit({amount : amount, status : status, custid: this.custid});
  }
}
