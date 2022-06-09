import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() user: any = {
    email: '',
    password: '',
  };
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  login(email: string, password: string): void {
    if (email == '' || password == '') {
      alert('Email and Password cant be empty');
      return;
    }
    this.auth.login(email,password).subscribe((auth: any) => {
        if (auth.auth == false) {
          return alert('Authentication Error');
        }
        localStorage.setItem('currentUser',JSON.stringify(auth));
        this.router.navigate(['/']);
        console.log(auth);
      });
  }
}
