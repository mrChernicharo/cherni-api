import { randomUUID } from "crypto";

export class IUser {
  id: string;
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
  }
}

class UsersRepository {
  private users: IUser[];

  constructor() {
    this.users = [];
  }

  createUser(name: string, email: string) {
    console.log({ name, email });
    const user = new IUser(name, email);
    this.users.push(user);
  }

  getUsers() {
    return [...this.users];
  }
}

export const usersRepository = new UsersRepository();
