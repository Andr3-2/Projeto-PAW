import { Component, DebugElement, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() user: any = {
    email: '',
    password: '',
  };
  constructor(
    public auth: AuthenticationService,

    private router: Router
  ) {}

  login(email: string, password: string): void {
    if (email == '' || password == '') {
      alert('Email and Password cant be empty');
      return;
    }
    this.auth.login(email, password).subscribe((auth: any) => {
      if (auth.auth == false) {
        return alert('Authentication Error');
      }
      localStorage.setItem('currentUser', JSON.stringify(auth));
      localStorage.setItem('email', email);
    });
    this.auth.role(email).subscribe((role: any) => {
      localStorage.setItem('role', JSON.stringify(role.role));
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      }
      this.router.navigate(['/']);
    });
  }
}
