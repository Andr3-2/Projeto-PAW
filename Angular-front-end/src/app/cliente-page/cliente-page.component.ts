import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css'],
})
export class ClientePageComponent implements OnInit {
  cliente: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //substituir este cliente por currentUser
    this.restService.getClientes().subscribe((clientes) => {
      this.cliente = clientes[0];
    });
  }
}
