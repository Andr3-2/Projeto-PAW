import { Book } from './book';

export class Notification {
  _id!: string;

  constructor(
    public date: Date,
    public title: string,
    public mensage: string,
    public book: Book
  ) {}
}
