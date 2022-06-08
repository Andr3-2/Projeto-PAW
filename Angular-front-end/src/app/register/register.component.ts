import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Models/cliente';
import { AuthenticationService } from '../services/authentication.service';

enum activityStateEnum {
  ACTIVE,
  NOTACTIVE,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() clienteData: Cliente = {
    _id: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    zipcode: '',
    city: '',
    contact: 0,
    NIF: 0,
    points: 0,
    booksSold: [],
    booksBought: [],
    activityState: activityStateEnum.ACTIVE,
  };
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  register(): void {
    this.http.post<any>(
      'http://localhost:3000/api/v1/register',
      this.clienteData
    );
    this.router.navigate(['/login']);
  }
}
