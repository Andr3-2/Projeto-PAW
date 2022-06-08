import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log(email + '|||' + password);
    return this.http
      .post<any>('http://localhost:3000/api/v1/books', {
        email,
        password,
      })
    }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
