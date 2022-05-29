enum activityStateEnum{
    ACTIVE,NOTACTIVE
}

export class Employee {
  fname: string;
  lname: string;
  email: string;
  address: string;
  zipcode: string;
  city: string;
  contact: Number;
  NIF: Number;
  salary: Number;
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
    salary: Number,
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
this.salary = salary;
    this.activityState = activityState;
  }
}
