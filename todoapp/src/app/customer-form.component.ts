import { Component, EventEmitter, Output } from "@angular/core";
import {FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  template: `
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
      <button>Ajouter</button>
    </form>
  `
})
export class CustomerFormComponent {

  @Output()
  onAddFullName = new EventEmitter<any>();
  //@Output()
  //onAddEmail = new EventEmitter<string>();
  form = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
  });

  onSubmit() {
    this.onAddFullName.emit({fullName : this.form.value.fullName, email:this.form.value.email});
    //this.onAddEmail.emit(this.form.value.email)
    this.form.setValue({
      fullName : '',
      email: ''
    });
  }
}
