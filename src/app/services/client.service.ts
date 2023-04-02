import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }


  get() {
    return this.http.get<Client[]>('http://localhost:8080/api/clients');
  }

  create(payload: Client) {
    return this.http.post<Client>('http://localhost:8080/api/clients', payload);
  }

  getById(id: string) {
    return this.http.get<Client>(`http://localhost:8080/api/clients/${id}`);
  }

 
  update(payload:Client){
    return this.http.put(`http://localhost:8080/api/clients/${payload.id}`,payload);
   }


  delete(id: string) {
    return this.http.delete<Client>(`http://localhost:8080/api/clients/${id}`);
  }

}
