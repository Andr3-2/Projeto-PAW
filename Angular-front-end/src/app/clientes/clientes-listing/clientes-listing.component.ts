import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Cliente } from '../../Models/cliente';

@Component({
  selector: 'app-clientes-listing',
  templateUrl: './clientes-listing.component.html',
  styleUrls: ['./clientes-listing.component.css'],
})
export class ClientesListingComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.restService.getClientes().subscribe((clientes) => (this.clientes = clientes));
  }

  deleteCliente(id: string) {
    this.restService.deleteBook(id).subscribe(
      (res) => {
        this.getClientes();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}