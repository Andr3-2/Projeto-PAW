import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';


@Component({
  selector: 'app-books-listing',
  templateUrl: './books-listing.component.html',
  styleUrls: ['./books-listing.component.css'],
})
export class BooksListingComponent implements OnInit {
  books: Book[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.restService.getBooks().subscribe((books) => (this.books = books));
  }

  deleteBook(id: string) {
    this.restService.deleteBook(id).subscribe(
      (res) => {
        this.getBooks();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
