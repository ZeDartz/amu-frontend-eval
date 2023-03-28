import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from "../types/invoices";
import {API_KEY, API_URL_INV} from "./codes";

@Injectable()
export class InvoicesService {

  constructor(private http: HttpClient) { }

  findInvoiceFromCustomer(custid: number): Observable<Invoices> {
    return this.http.get<Invoices>(API_URL_INV + '?custid=eq.' + custid, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Prefer: "return=representation"
      }
    });
  }

  createInvoice(amount: number, status: boolean, custid: number): Observable<Invoices> {
    return this.http.post<Invoices>(API_URL_INV, {
      amount: amount,
      status: status,
      custid: custid
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}
