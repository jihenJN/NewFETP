import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  getAccount(): Observable<User>{
    return this.http.get<User>('http://localhost:8080/api/account')
  }



}
