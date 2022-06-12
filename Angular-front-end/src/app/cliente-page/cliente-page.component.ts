import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css'],
})
export class ClientePageComponent implements OnInit {
  cliente: any;
  admin=true;
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //substituir este cliente por currentUser
    var token = JSON.parse(localStorage.getItem('currentUser')!).token;
    this.restService.getUser(token).subscribe((user) => {
      this.cliente = user;
    });
    if(localStorage.getItem('role')?.match("admin")) this.admin = false;
  }
}
