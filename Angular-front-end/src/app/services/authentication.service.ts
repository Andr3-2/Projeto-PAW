import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  endpoint = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.endpoint + 'login', { email, password });
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
}
