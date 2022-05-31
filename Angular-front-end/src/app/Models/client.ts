import { Book } from './book';

enum activityStateEnum{
    ACTIVE,NOTACTIVE
}

export class Client {
  _id!: string;
  fname: string;
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

  public constructor(
    fname: string,
    lname: string,
    email: string,
    address: string,
    zipcode: string,
    city: string,
    contact: Number,
    NIF: Number,
    points: Number,
    activityState: activityStateEnum
  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.contact = contact;
    this.NIF = NIF;
    this.points = points;
    this.booksSold = new Array();
    this.booksBought = new Array();
    this.activityState = activityState;
  }
}
