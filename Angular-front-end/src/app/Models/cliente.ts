import { Book } from './book';

enum activityStateEnum{
    ACTIVE,NOTACTIVE
}

export class Cliente {
  _id!: string;
  fname: string;
  password: string;
  lname: string;
  email: string;
  address: string;
  zipcode: string;
  city: string;
  contact: Number;
  NIF: Number;
  points: Number;
  booksSold: Array<Book>;
  booksBought: Array<Book>;
  activityState: activityStateEnum;
  static activityStateEnum: any;

  public constructor(
    fname: string,
    lname: string,
    password: string,
    email: string,
    address: string,
    zipcode: string,
    city: string,
    contact: Number,
    NIF: Number,
    activityState: activityStateEnum
  ) {
    this.fname = fname;
    this.lname = lname;
    this.password = password;
    this.email = email;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.contact = contact;
    this.NIF = NIF;
    this.points = 10;
    this.booksSold = new Array();
    this.booksBought = new Array();
    this.activityState = activityState;
  }
}
