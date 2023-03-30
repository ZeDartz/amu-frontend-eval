import { Component, Input } from "@angular/core";
import {Customers} from "../models/customers";

@Component({
  selector: 'app-customers',
  template: `
    <a routerLink="/create"><button type="button" class="btn btn-primary">Créer un client</button></a>
    <div style="padding-top: 20px" class="centered-element">
      <table class="table">
        <thead>
        <tr>
          <th colspan="3">Liste de clients</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of customers">
          <td>
            <label>
              <a routerLink="/{{ item.id }}"><button type="button" class="btn btn-success">{{ item.fullName }}</button></a>
            </label>
          </td>
          <td>
            <label>
              {{item.email}}
            </label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    `,
  styles: ['table,td {padding:15px; border: 1px solid #333;}thead,tfoot {background-color: #333;color: #fff;}']
})
export class CustomersComponent {
  @Input()
  customers : Customers = [];
}
