import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _cart: Book[];
  cart: BehaviorSubject<Book[]>;
  private _total: Number = 0;
  total: BehaviorSubject<any>;

  constructor() {
    this._cart = [];
    this.cart = new BehaviorSubject<Book[]>([]);
    this._total = 0;
    this.total = new BehaviorSubject<any>("0");
    

    if (typeof Storage !== 'undefined') {
      let sessionDataCart = sessionStorage.getItem('cart');
      let sessionDataTotal = sessionStorage.getItem('total');

      console.log(sessionDataCart);
      console.log('sessionDataTotal: ', sessionDataTotal);

      if (sessionDataCart != null) {
        this._cart = JSON.parse(sessionDataCart);
        this.cart.next(this._cart);
      }
      if (sessionDataTotal != null) {
        this._total = Number(sessionDataTotal);
        this.total.next(this._total);
      }
    } else {
      //sorry your browser doesnt support sessionStorage
    }
  }

  getTotal() {
    let newtotal = 0;
    for (let book of this._cart) {
      newtotal += Number(book.new_price);
    }
    this._total = newtotal;
    this.total.next(this._total);
    sessionStorage.setItem('total', this._total.toString());
  }

  addBookToCart(book: Book) {
    this._cart.push(book);
    this.cart.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
    this.getTotal();
  }

  removeBookFromCart(index: number) {
    this._cart.splice(index, 1);
    this.cart.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
    this.getTotal();
  }

  clearCart() {
    this._cart = [];
    this.cart.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
    this.getTotal();
  }
}
