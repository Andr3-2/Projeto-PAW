import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular_REST';
  btnadmin = false;
  btnlogin = true;
  btnlogout = false;
  email= localStorage.getItem('email');

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.checklog();
  }


  checklog() {
    let role = localStorage.getItem('role');
    console.log("role:" + role);
    if (localStorage.getItem('currentUser')) {
      this.btnlogin = false;
      this.btnlogout = true;
    }
    this.btnadmin = false;
    if (role?.match("admin")) this.btnadmin = true;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
    localStorage.removeItem('email');
    this.checklog();
  }
}
