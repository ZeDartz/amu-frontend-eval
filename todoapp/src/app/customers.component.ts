import { Component, Input } from "@angular/core";
import {Customers} from "./types/customers";

@Component({
  selector: 'app-customers',
  template: `
    <h1>Liste des clients</h1>
    <a routerLink="/create">Créer un client</a>
    <table>
      <thead>
      <tr>
        <th colspan="3">Liste de personnes</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of customers">
        <td>
          <label>
          Nom : {{ item.fullName }}
          </label>
        </td>
        <td>
          <label>
            Mail : {{item.email}}
          </label>
        </td>
        <td>
          <label>
            <a routerLink="/{{ item.id }}">Details</a>
          </label>
        </td>
      </tr>
      </tbody>
    </table>
    `,
  styles: ['table,td {border: 1px solid #333;}thead,tfoot {background-color: #333;color: #fff;}']
})
export class CustomersComponent {
  @Input()
  customers : Customers = [];
}
