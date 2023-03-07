import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customers } from "../types/customers";
import { Invoices } from "../types/invoices";
import {API_KEY, API_URL_CUST} from "./codes";

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  findAllCustomers(): Observable<Customers> {
    return this.http.get<Customers>(API_URL_CUST, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY
      }
    });
  }

  createCustomer(fullName: string, email: string): Observable<Customers> {
    return this.http.post<Customers>(API_URL_CUST, {
      fullName: fullName,
      email: email
    }, {
      headers: {
        "Content-Type": "application/json",
        apiKey: API_KEY,
        Prefer: "return=representation"
      }
    });
  }
}
