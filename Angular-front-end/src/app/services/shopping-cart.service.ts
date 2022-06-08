import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _cart: Book[];
  cart: BehaviorSubject<Book[]>;

  constructor() {
    this.cart = new BehaviorSubject<Book[]>([]);
    this._cart = [];

    if (typeof Storage !== 'undefined') {
      let sessionData = sessionStorage.getItem('cart');
      console.log(sessionData);
      if (sessionData != null) {
        this._cart = JSON.parse(sessionData);
        this.cart.next(this._cart);
      }
    } else {
      //sorry your browser doesnt support sessionStorage
    }
  }

  addBookToCart(book: Book) {
    this._cart.push(book);
    this.cart.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
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
