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
  employee: any = {
    fname: 'employeeTeste',
    lname: 'teste',
    email: '',
    address: '',
    zipcode: '',
    city: '',
    contact: '',
    NIF: '',
    salary: 0,
    activityState: '',
  };

  //cliente teste (recebe o logado e manda de input)
  cliente: any = {
    fname: 'clienteTeste',
    lname: 'teste',
    email: '',
    address: '',
    zipcode: '',
    city: '',
    contact: 0,
    NIF: 0,
    points: 0,
    booksSold: [],
    booksBought: [],
    activityState: '',
  };

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) {}

  totalPrice: number = 0;

  ngOnInit(): void {
    console.log(this.route.snapshot.params['cart']);

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
}
