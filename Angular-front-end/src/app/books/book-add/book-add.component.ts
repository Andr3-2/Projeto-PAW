import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {

  @Input() bookData: any = {
    category: '',
    title: '',
    author: '',
    year: '',
    description: '',
    ISBN: '',
    new_price: '',
    used_price: '',
    new_quantity: '',
    used_quantity: '',
  };

  constructor(
    public rest: RestService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addBook() {
    this.rest.addBook(this.bookData).subscribe(
      (result: Book) => {
        console.log(result);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
