import { Component, Input } from "@angular/core";
import {Customers} from "./types/customers";

@Component({
  selector: 'app-customers',
  template: `
    <ul>
      <li *ngFor="let item of customers">
        <label>
          Nom : {{ item.fullName }}
          <br>
          Mail : {{item.email}}
        </label>
      </li>
    </ul>
    `
})
export class CustomersComponent {
  @Input()
  customers : Customers = [];
}
