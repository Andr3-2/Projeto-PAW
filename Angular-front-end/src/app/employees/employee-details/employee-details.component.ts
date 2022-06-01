import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(
    public restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService
      .getEmployee(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        this.employee = data;
      });
  }

  deleteEmployee(id: string) {
    this.restService.deleteEmployee(id).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
