enum activityStateEnum{
    ACTIVE,NOTACTIVE
}

export class Employee {
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
    public salary: number,
    public activityState: activityStateEnum
  ) {}
}
