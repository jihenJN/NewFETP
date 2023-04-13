import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Invoice[]>('http://localhost:8080/api/invoices');
  }

  create(payload: Invoice) {
    return this.http.post<Invoice>('http://localhost:8080/api/invoices', payload);
  }


  delete(id: string) {
    return this.http.delete<Invoice>(`http://localhost:8080/api/invoices/${id}`);
  }

}
