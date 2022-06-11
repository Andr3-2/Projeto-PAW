import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_REST';

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.hidebuttons();
  }

  hidebuttons() {
    if (localStorage.getItem('role') === 'admin') {
      (document.getElementById('admin') as HTMLFormElement).style.visibility =
        'visible';
      return;
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
