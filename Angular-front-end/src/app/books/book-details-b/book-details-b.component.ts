import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-book-details-b',
  templateUrl: './book-details-b.component.html',
  styleUrls: ['./book-details-b.component.css']
})
export class BookDetailsBComponent implements OnInit {

  book: any;

  constructor(
    public restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService
      .getBook(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
        this.book = data;
      });
  }

  deleteBook(id: string) {
    this.restService.deleteBook(id).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
