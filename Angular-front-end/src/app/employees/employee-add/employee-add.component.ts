import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Employee } from '../../Models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  @Input() employeeData: any = {
    fname: "",
    lname: "",
    email: "",
    address: "",
    zipcode: "",
    city: "",
    contact: "",
    NIF: "",
    salary: 0,
    activityState: "",
  };

  constructor(public rest: RestService, private router: Router) {}

  ngOnInit(): void {}

  addEmployee() {
    this.rest.addEmployee(this.employeeData).subscribe(
      (result: Employee) => {
        console.log(result);
        this.router.navigate(['/employees']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
