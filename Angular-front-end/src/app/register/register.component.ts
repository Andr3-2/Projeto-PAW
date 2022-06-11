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
export class RegisterComponent {
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

  ) {}


  register(
    fname: string,
    lname: string,
    email: string,
    password: string
  ): void {
    if (fname === '' || lname === '' || email === '' || password === '') {
      alert('Empty inputs');
      return;
    }
    try {
      this.auth.register(fname, lname, email, password).subscribe((data) => {
        if (data.auth == true) {
          this.router.navigate(['/']);
        }
      });
    } catch (err) {
      console.log(err);
      alert("Register error");
    }
  }
}
