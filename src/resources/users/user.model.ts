import { v4 as uuid } from 'uuid';

interface IPublicUser {
  id: string;
  name: string;
  login: string;
}

class User {

  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IPublicUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
