import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Invoices } from "../types/invoices";
import {API_KEY, API_URL_INV} from "./codes";

@Injectable()
export class InvoicesService {

  constructor(private http: HttpClient) { }
  findAllInvoices(): Observable<Invoices> {
    return this.http.get<Invoices>(API_URL_INV, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY
      }
    });
  }

  createInvoice(amount: number, isPaid: boolean): Observable<Invoices> {
    return this.http.post<Invoices>(API_URL_INV, {
      amount: amount,
      isPaid: isPaid
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Prefer: "return=representation"
      }
    });
  }

  togglePaidInvoice(id: number, isPaid: boolean): Observable<Invoices> {
    return this.http.patch<Invoices>(API_URL_INV + '?id=eq.' + id, {
      isPaid: isPaid
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}
