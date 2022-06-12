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

  discountSelected: number = 0;
  discountedPrice: number = 0;

  constructor(
    public restService: RestService,
    private router: Router,
    private cart: ShoppingCartService
  ) {}

  ngOnInit(): void {}

  addTransaction() {
    this.transactionData.sender = this.sender;
    this.transactionData.receiver = this.receiver;
    this.transactionData.books = this.books;

    if (this.discountSelected != 0) {
      this.transactionData.totalPrice = this.discountedPrice;
    } else {
      this.transactionData.totalPrice = this.totalPrice;
    }

    this.addToClientPoints();
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

  addToClientPoints() {
    let points: number = this.transactionData.totalPrice * 5;

    if (this.isClientReceiver) {
      this.transactionData.receiver.points += points;

      switch (this.discountSelected) {
        case 10: {
          this.transactionData.receiver.points -= 100;
          break;
        }
        case 25: {
          this.transactionData.receiver.points -= 300;
          break;
        }
        case 50: {
          this.transactionData.receiver.points -= 600;
          break;
        }
        default: {
          //statements;
          break;
        }
      }
    }
  }

  addToClientBooks() {
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

  selectDiscount(discountValue: number) {
    this.discountSelected = discountValue;
    this.discountedPrice = (this.totalPrice * (100 - discountValue)) / 100;

    console.log(this.discountSelected);
  }
}
