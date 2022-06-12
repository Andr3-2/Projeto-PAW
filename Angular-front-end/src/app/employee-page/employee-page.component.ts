import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
})
export class EmployeePageComponent implements OnInit {
  employee: any;
  admin = true;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //substituir este cliente por currentUser
    var token = JSON.parse(localStorage.getItem('currentUser')!).token;
    this.restService.getUser(token).subscribe((user) => {
      this.employee = user;
    });
    if (localStorage.getItem('role')?.match('admin')) this.admin = false;
  }
}
