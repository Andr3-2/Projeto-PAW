import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-clientes-listing',
  templateUrl: './clientes-listing.component.html',
  styleUrls: ['./clientes-listing.component.css']
})
export class ClientesListingComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.restService.getClientes().subscribe((clientes) => (this.clientes = clientes));
  }

  deleteCliente(id: string) {
    this.restService.deleteCliente(id).subscribe(
      (res) => {
        this.getClients();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
