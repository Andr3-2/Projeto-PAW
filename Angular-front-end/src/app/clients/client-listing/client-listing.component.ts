import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.css']
})
export class ClientListingComponent implements OnInit {
  clients: Client[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.restService.getClients().subscribe((clients) => (this.clients = clients));
  }

  deleteBook(id: string) {
    this.restService.deleteBook(id).subscribe(
      (res) => {
        this.getClients();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
