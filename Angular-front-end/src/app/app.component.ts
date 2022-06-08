import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_REST';

  constructor(
    private auth:AuthenticationService,
  ){

  }

  logout(): void {
    this.auth.logout();
  }
}
