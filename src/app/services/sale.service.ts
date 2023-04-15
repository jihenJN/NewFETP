import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../models/Sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Sale[]>('http://localhost:8080/api/sales');
  }

   
  getById(id: string) {
    return this.http.get<Sale>(`http://localhost:8080/api/sales/${id}`);
  }


 
  update(payload:Sale){
    return this.http.put(`http://localhost:8080/api/sales/${payload.id}`,payload);
   }



  delete(id: string) {
    return this.http.delete<Sale>(`http://localhost:8080/api/sales/${id}`);
  }

  
}
