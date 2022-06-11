import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';
import { Cliente } from '../../Models/cliente';
import { Transaction } from '../../Models/transaction';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css'],
})
export class TransactionAddComponent implements OnInit {
  @Input('sender') sender: any;
  @Input('receiver') receiver: any;
  @Input('books') books: Book[] = [];
  @Input('totalPrice') totalPrice: any;

  transactionData: any = {
    date: new Date()
  };

  constructor(public rest: RestService, private router: Router) {}

  ngOnInit(): void {
    this.transactionData.sender = this.sender;
    this.transactionData.receiver = this.receiver;
    this.transactionData.books = this.books;
    this.transactionData.totalPrice = this.totalPrice;
    console.log(this.sender);
    console.log(this.receiver);
    
    
  }

  addTransaction() {
    this.rest.addTransaction(this.transactionData).subscribe(
      (result: Transaction) => {
        console.log(result);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
