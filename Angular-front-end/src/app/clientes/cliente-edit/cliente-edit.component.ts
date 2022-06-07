import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
})
export class ClienteEditComponent implements OnInit {
  @Input() clienteData: any = {
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
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService
      .getCliente(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        this.clienteData = data;
      });
  }
  updateCliente():void{
    this.restService.updateCliente(this.route.snapshot.params['id'], this.clienteData)
    .subscribe(
      (result) => {
        this.router.navigate(['/cliente-details/' + result._id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
