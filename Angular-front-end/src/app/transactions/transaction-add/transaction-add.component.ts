import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';
import { Cliente } from '../../Models/cliente';
import { Transaction } from '../../Models/transaction';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css'],
})
export class TransactionAddComponent implements OnInit {
  @Input('isClientReceiver') isClientReceiver: any;
  @Input('sender') sender: any;
  @Input('receiver') receiver: any;
  @Input('books') books: Book[] = [];
  @Input('totalPrice') totalPrice: any;

  transactionData: any = {
    date: new Date(),
  };

  constructor(
    public restService: RestService,
    private router: Router,
    private cart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    if (this.isClientReceiver) {
      console.log();
      console.log(localStorage.getItem('role'));
      console.log(typeof(localStorage.getItem('role')));

      //alert('You need to be a client to buy books');
    }

    this.transactionData.sender = this.sender;
    this.transactionData.receiver = this.receiver;
    this.transactionData.books = this.books;
    this.transactionData.totalPrice = this.totalPrice;
    console.log('new transaction sender = ', this.sender);
    console.log('new transaction receiver = ', this.receiver);
    console.log('new transaction books = ', this.books);
  }

  addTransaction() {
    this.addToClientBooks();
    this.restService.addTransaction(this.transactionData).subscribe(
      (result: Transaction) => {
        this.cart.clearCart();
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addToClientBooks() {
    //se isClientReceiver for true então é uma compra (o cliente é o receiver), caso contrário é uma venda (o cliente é o sender)
    if (this.isClientReceiver) {
      for (let book of this.transactionData.books) {
        this.transactionData.receiver.booksBought.push(book);
      }
      this.restService
        .updateCliente(
          this.transactionData.receiver._id,
          this.transactionData.receiver
        )
        .subscribe(
          (result) => {
            console.log(JSON.stringify(this.transactionData.receiver));
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
