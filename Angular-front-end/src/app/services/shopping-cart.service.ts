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
    this._cart = [];
    this.cart = new BehaviorSubject<Book[]>([]);
  }

  addBookToCart(book: Book) {
    this._cart.push(book);
    this.cart.next(this._cart);
  }

  removeBookFromCart(index: number) {
    this._cart.splice(index, 1);
    this.cart.next(this._cart);
  }

  clearCart() {
    this._cart=[];
    this.cart.next(this._cart);
  }
}
