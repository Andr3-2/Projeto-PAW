export class Book {
  _id!: string;
  
  constructor(
    public category: string,
    public title: string,
    public author: string,
    public year: string,
    public description: string,
    public ISBN: number,
    public new_price: number,
    public used_price: number,
    public new_quantity: number,
    public used_quantity: number
  ) {}
}
