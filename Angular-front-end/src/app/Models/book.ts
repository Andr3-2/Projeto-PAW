export class Book {
  _id!: string;

  constructor(
    public category: string,
    public title: string,
    public author: string,
    public year: string,
    public description: string,
    public ISBN: string,
    public new_price: string,
    public used_price: string,
    public new_quantity: string,
    public used_quantity: string
  ) {}
}
