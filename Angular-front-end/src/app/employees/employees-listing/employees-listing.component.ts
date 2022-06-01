import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Employee } from '../../Models/employee';

@Component({
  selector: 'app-employees-listing',
  templateUrl: './employees-listing.component.html',
  styleUrls: ['./employees-listing.component.css'],
})
export class EmployeesListingComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.restService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  deleteEmployee(id: string) {
    this.restService.deleteEmployee(id).subscribe(
      (res) => {
        this.getEmployees();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}