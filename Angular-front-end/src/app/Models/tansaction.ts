import { DatePipe, getLocaleTimeFormat } from '@angular/common';
import { Book } from './book';
import { Employee } from './employee'
import { Client } from './client';

export class transaction {
  date: Date;
  sender: any;
  receiver: any;
  books: Array<Book>;
  totalPrice: Number;

  public constructor(
    sender: any,
    receiver: any,
    books: Array<Book>,
    totalPrice: Number
  ) {
    this.date = new Date();
    this.sender = sender;
    this.receiver = receiver;
    this.books = books;
    this.totalPrice = totalPrice;
    if(this.sender !instanceof Employee &&
        this.sender !instanceof Client ||
        this.receiver !instanceof Employee &&
        this.receiver !instanceof Client){
        throw('Sender&Reciver Must Be Class.Employee/Class.Client');
    }
  }
}
