export class Book {
  _id!: string;
  category: string;
  title: string;
  author: string;
  year: Number;
  description: string;
  ISBN: Number;
  new_price: Number;
  used_price: Number;
  new_quantity: Number;
  used_quantity: Number;

  constructor(
    category: string,
    title: string,
    author: string,
    year: Number,
    description: string,
    ISBN: Number,
    new_price: Number,
    used_price: Number,
    new_quantity: Number,
    used_quantity: Number
  ) {
    this.category = category;
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.ISBN = ISBN;
    this.new_price = new_price;
    this.used_price = new_price;
    this.new_quantity = new_quantity;
    this.used_quantity = new_quantity;
  }
}
