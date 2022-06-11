import { Book } from './book';
import { Cliente } from './cliente';

export class Proposal {
  _id!: string;

  constructor(
    public date: Date,
    public sender: Cliente,
    public title: string,
    public mensage: string,
    public books: [Book]
  ) {}
}
