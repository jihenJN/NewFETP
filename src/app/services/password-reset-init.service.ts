import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class PasswordResetInitService {
  constructor(private http: HttpClient) {}

  save(mail: string): Observable<{}> {
    return this.http.post('http://localhost:8080/api/account/reset-password/init', mail);
  }
}