export class Book {
  _id!: string;
  category: string;
  title: string;
  author: string;
  year: string;
  description: string;
  ISBN: string;
  new_price: string;
  used_price: string;
  new_quantity: string;
  used_quantity: string;

  constructor(
    category: string,
    title: string,
    author: string,
    year: string,
    description: string,
    ISBN: string,
    new_price: string,
    used_price: string,
    new_quantity: string,
    used_quantity: string
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
