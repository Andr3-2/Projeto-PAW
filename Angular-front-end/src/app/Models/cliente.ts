export class Cliente {
  _id!: string;

  constructor(
    public fname: string,
    public lname: string,
    public email: string,
    public address: string,
    public zipcode: string,
    public city: string,
    public contact: string,
    public NIF: string,
    public points: string,
    public booksSold: [],
    public booksBought: [],
    public activityState: string
  ) {}
}
