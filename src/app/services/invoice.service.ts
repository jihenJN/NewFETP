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


  getCountStatusSent (){
    return this.http.get<number>('http://localhost:8080/api/StatusSent')
  }


  getCountStatusReceived (){
    return this.http.get<number>('http://localhost:8080/api/StatusReceived')
  }


  getCountStatusPaid (){
    return this.http.get<number>('http://localhost:8080/api/StatusPaid')
  }

  getCountStatusOverdue (){
    return this.http.get<number>('http://localhost:8080/api/StatusOverdue')
  }




  create(payload: Invoice) {
    return this.http.post<Invoice>('http://localhost:8080/api/invoices', payload);
  }

    
  getById(id: string) {
    return this.http.get<Invoice>(`http://localhost:8080/api/invoices/${id}`);
  }


 
  update(payload:Invoice){
    return this.http.put(`http://localhost:8080/api/invoices/${payload.id}`,payload);
   }

  


  delete(id: string) {
    return this.http.delete<Invoice>(`http://localhost:8080/api/invoices/${id}`);
  }

}
