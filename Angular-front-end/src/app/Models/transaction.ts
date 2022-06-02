import { DatePipe, getLocaleTimeFormat } from '@angular/common';
import { Book } from './book';
import { Employee } from './employee'
import { Cliente } from './cliente';

export class Transaction {
  _id!: string;
  date: Date = new Date();

  public constructor(
    public sender: any,
    public receiver: any,
    public books: Array<Book>,
    public totalPrice: number
  ) {
    if (
      (this.sender! instanceof Employee && this.sender! instanceof Cliente) ||
      (this.receiver! instanceof Employee && this.receiver! instanceof Cliente)
    ) {
      throw 'Sender&Reciver Must Be Class.Employee/Class.Client';
    }
  }
}
