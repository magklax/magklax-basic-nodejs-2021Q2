import { v4 as uuid } from 'uuid';

interface IPublicUser {
  id: string;
  name: string;
  login: string;
}

/** Class representing a user model. */
class User {
  /**
   * Create user
   * @property {string} id - user id
   * @property {string} name - user name
   * @property {string} login - user login
   * @property {string} password - user password
   */

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

  /**
   * Return user object
   * @param {User} user - created user object
   * @return {Object<User.id, User.name, User.login>} user object without password property
   */

  static toResponse(user: User): IPublicUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };
