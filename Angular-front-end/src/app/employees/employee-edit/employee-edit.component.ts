import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  @Input() employeeData: any = {
    fname: '',
    lname: '',
    email: '',
    address: '',
    zipcode: '',
    city: '',
    contact: '',
    NIF: '',
    salary: 0,
    activityState: '',
  };

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rest
      .getEmployee(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        console.log(data);
        this.employeeData = data;
      });
  }

  updateEmployee() {
    this.rest
      .updateEmployee(this.route.snapshot.params['id'], this.employeeData)
      .subscribe(
        (result) => {
          this.router.navigate(['/employee-details/' + result._id]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
