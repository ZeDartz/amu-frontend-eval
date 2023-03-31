import { Component, EventEmitter, Output } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-customer-form",
  template: `
    <h1>Créer un client</h1>
    <br>
    <a routerLink="/"><button type="button" class="btn btn-primary">Retour au menu</button></a>
    <br>
    <form style="padding-top: 20px" (ngSubmit)="onSubmit()" [formGroup]="form">
      <input
        formControlName="fullName"
        type="text"
        class="form-control"
        name="fullName"
        placeholder="Nom complet"
      />
      <span style="color: red" *ngIf="fullName && fullName.invalid && fullName.touched">Nom invalide</span>
      <br>
      <input
        formControlName="email"
        type="email"
        class="form-control"
        name="email"
        placeholder="email"
      />
      <span style="color: red" *ngIf="email && email.invalid && email.touched">Mail invalide</span>
      <br>
      <br>
      <button [disabled]="form.invalid" type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `
})
export class CustomerFormComponent {

  @Output()
  onAddFullName = new EventEmitter<any>();
  form = new FormGroup({
    fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
  });
  get fullName(){
    return this.form.get('fullName')
  }
  get email(){
    return this.form.get('email')
  }
  onSubmit() {
    this.onAddFullName.emit({fullName : this.form.value.fullName, email:this.form.value.email});
    this.form.setValue({
      fullName : '',
      email: ''
    });
  }
}
