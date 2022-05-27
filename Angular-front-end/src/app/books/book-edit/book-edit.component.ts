import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rest
      .getBook(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        console.log(data);
        this.bookData = data;
      });
  }

  updateBook() {
    this.rest
      .updateBook(this.route.snapshot.params['id'], this.bookData)
      .subscribe(
        (result) => {
          this.router.navigate(['/book-details/' + result._id]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
