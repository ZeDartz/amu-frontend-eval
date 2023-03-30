import { Component, EventEmitter, Output } from "@angular/core";
import {FormControl, FormGroup } from "@angular/forms";

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
        name="fullName-text"
        placeholder="Nom complet"
      />
      <br>
      <input
        formControlName="email"
        type="text"
        class="form-control"
        name="email-text"
        placeholder="email"
      />
      <br>
      <br>
      <button type="button" class="btn btn-primary">Enregistrer le client</button>
    </form>
  `
})
export class CustomerFormComponent {

  @Output()
  onAddFullName = new EventEmitter<any>();
  form = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
  });

  onSubmit() {
    this.onAddFullName.emit({fullName : this.form.value.fullName, email:this.form.value.email});
    this.form.setValue({
      fullName : '',
      email: ''
    });
  }
}
