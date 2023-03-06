import { Component } from '@angular/core';
import { Customers} from "./types/customers";

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <h1>La Todo App</h1>

      <main>
        <app-customers
          [customers]="customers"
        ></app-customers>
        <app-customer-form (onNewTask)="addCustomer($event, $event)"></app-customer-form>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'todoapp';
  customers: Customers = [
    { id: 1, fullName: "Thomas NINCI", email: "thomas.ninci@gmail.com" },
    { id: 2, fullName: "Cédric NINCI", email: "cedric.ninci@gmail.com" },
    { id: 3, fullName: "Florian PLAZI", email: "florian.plazi@gmail.com" },
  ];

  addCustomer(fullName: string, email: string) {
    this.customers.push({
      id: Date.now(),
      fullName: fullName,
      email: email,
    });
  }
}
