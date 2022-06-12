import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _cart: Book[];
  cart: BehaviorSubject<Book[]>;
  _total: Number = 0;

  constructor() {
    this.cart = new BehaviorSubject<Book[]>([]);
    this._cart = [];

    //this._total = new BehaviorSubject<Number>(0);

    if (typeof Storage !== 'undefined') {
      let sessionDataCart = sessionStorage.getItem('cart');
      let sessionDataTotal = sessionStorage.getItem('total');

      console.log(sessionDataCart);
      if (sessionDataCart != null) {
        this._cart = JSON.parse(sessionDataCart);
        this.cart.next(this._cart);
      }
      if (sessionDataTotal != null) {
        sessionStorage.setItem('total', '0');
      }
    } else {
      //sorry your browser doesnt support sessionStorage
    }
  }
  
  getTotal() {
    let newtotal = 0;
    this._cart.forEach((book) => {
      newtotal += book.new_price.valueOf();
    });
    this._total = newtotal;
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
  }

  clearCart() {
    this._cart = [];
    this.cart.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
  }

}
