import { Component, EventEmitter, Output } from "@angular/core";
import {FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  template: `
    <h1>Créer un client</h1>
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <input
        formControlName="fullName"
        type="text"
        name="fullName-text"
        placeholder="Nom complet"
      />
      <input
        formControlName="email"
        type="text"
        name="email-text"
        placeholder="email"
      />
      <button>Enregistrer</button>
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
