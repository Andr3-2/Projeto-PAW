import { Book } from './book';

enum activityStateEnum{
    ACTIVE,NOTACTIVE
}

export class Cliente {
  _id!: string;

  constructor(
    public fname: string,
    public lname: string,
    public email: string,
    public address: string,
    public zipcode: string,
    public city: string,
    public contact: number,
    public NIF: number,
    public points: number,
    public booksSold: Array<Book>,
    public booksBought: Array<Book>,
    public activityState: activityStateEnum
  ) {}
}
