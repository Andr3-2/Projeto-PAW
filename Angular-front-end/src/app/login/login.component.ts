import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user:any ={
    email: '',
    password: ''
  }
  constructor(
    public rest: RestService, private router: Router,
    private auth:AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login():void{
    this.auth.login(this.user.email, this.user.password);
  }

}
