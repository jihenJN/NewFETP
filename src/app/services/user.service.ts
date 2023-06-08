import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<User[]>('http://localhost:8080/api/admin/users')
  }

   getUserWithAuthoritiesByLogin(login: string): Observable<User> {
    login="admin";
    return this.http.get<User>(`http://localhost:8080/api/admin/users/${login}`);
  }

  delete(id: string) {
    return this.http.delete<User[]>(`http://localhost:8080/api/admin/users/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/api/admin/users', user);
  }

}
