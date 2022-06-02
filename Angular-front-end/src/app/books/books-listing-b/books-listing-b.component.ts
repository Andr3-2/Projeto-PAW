import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-books-listing-b',
  templateUrl: './books-listing-b.component.html',
  styleUrls: ['./books-listing-b.component.css'],
})
export class BooksListingBComponent implements OnInit {
  books: Book[] = [];
  cart: Book[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private restService: RestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBooks();

    this.shoppingCartService.cart.subscribe(
      (cart) => {
        this.cart = cart;
        console.log(JSON.stringify(cart));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBooks(): void {
    this.restService.getBooks().subscribe((books) => (this.books = books));
  }

  addBookToCart(book: Book): void {
    this.shoppingCartService.addBookToCart(book);
  }
}
