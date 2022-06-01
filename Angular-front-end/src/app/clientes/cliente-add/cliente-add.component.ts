import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Cliente } from '../../Models/cliente';
import { Book } from '../../Models/book';


@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css'],
})
export class ClienteAddComponent implements OnInit {
  books: Book[] = [];

  @Input() clienteData: any = {
    fname: '',
    lname: '',
    email: '',
    address: '',
    zipcode: '',
    city: '',
    contact: 0,
    NIF: 0,
    points: 0,
    booksSold: new Array<Book>(),
    booksBought: new Array<Book>(),
    activityState: '',
  };

  constructor(public restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.restService.getBooks().subscribe((books) => (this.books = books));
  }

  addCliente() {
    this.restService.addCliente(this.clienteData).subscribe(
      (result: Cliente) => {
        console.log(result);
        this.router.navigate(['/clientes']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}