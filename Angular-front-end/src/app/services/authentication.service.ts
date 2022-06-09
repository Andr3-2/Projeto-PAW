import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/login', {
      email,
      password,
    });
  }

  logout() {
    if (!localStorage.getItem('currentUser')) {
      alert('Not Logged in');
      return;
    }
    localStorage.removeItem('currentUser');
    alert('Loged Out');
    this.router.navigate(['/login']);
  }

  register(
    fname: string,
    lname: string,
    email: string,
    password: string
  ) {
    return this.http.post<any>('http://localhost:3000/api/v1/register', {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
  }
}
