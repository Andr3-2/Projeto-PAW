import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Models/book';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  @Input() cart: Book[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let cart: Book[] = JSON.parse(this.route.snapshot.params['cart']);
    if (cart != null) {
      this.cart = cart;
    } else {
      console.log(':(');
    }
  }
}
