import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css'],
})
export class ClienteDetailsComponent implements OnInit {
  cliente: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService
      .getCliente(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        this.cliente = data;
      });
  }

  deleteCliente(id: string) {
    this.restService.deleteCliente(id).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
