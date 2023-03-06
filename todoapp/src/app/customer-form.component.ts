import { Component, EventEmitter, Output } from "@angular/core";
import {FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <input
        formControlName="text"
        type="text"
        name="fullName-text"
        placeholder="Full Name"
      />
      <input
        formControlName="text"
        type="text"
        name="email-text"
        placeholder="E-mail"
      />
      <button>Ajouter</button>
    </form>
  `
})
export class CustomerFormComponent {

  @Output()
  onAddFullName = new EventEmitter<string>();
  @Output()
  onAddEmail = new EventEmitter<string>();

  form = new FormGroup({
    text: new FormControl()
  });

  onSubmit() {
    this.onAddFullName.emit(this.form.value.text);
    this.form.setValue({
      text: ''
    });
  }
}
