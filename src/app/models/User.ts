export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  image?: string;
  first_name?: string;
  last_name?: string;
  token?: string;
}

export interface Login {
  username: string;
  password: string;
}

export class Userr {
 constructor(
  public id: number,
  public username: string,
  public email: string,
  public password: string,
  public image: string,
  public first_name: string,
  public last_name: string,
 ){}
}

