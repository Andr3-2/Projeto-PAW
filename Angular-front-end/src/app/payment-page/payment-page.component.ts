import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Models/book';

import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  @Input() cart: Book[] = [];

  //employee teste
  employee: any = { fname: '' };
  //cliente teste (recebe o logado e manda de input)
  cliente: any = { fname: '' };
  totalPrice: number = 0;

  isClientLoggedIn: boolean = false;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role')?.match('user')) {
      this.isClientLoggedIn = true;
    }
    
    this.getUser();
    this.getReceiver();

    let cart: Book[] = JSON.parse(this.route.snapshot.params['cart']);
    if (cart != null) {
      this.cart = cart;
      for (let book of cart) {
        this.totalPrice += Number(book.new_price);
      }
    } else {
      console.log(':(');
    }
  }

  getUser() {
    //recebe o cliente logado
    let currentUserToken: string;
    let userStorageString: any = localStorage.getItem('currentUser');

    if (userStorageString != null) {
      currentUserToken = JSON.parse(userStorageString).token;
      this.restService.getUser(currentUserToken).subscribe((user) => {
        this.cliente = user;
      });
    }
  }

  getReceiver() {
    this.restService
      .getEmployees()
      .subscribe((employees) => (this.employee = employees[0]));
  }
}
