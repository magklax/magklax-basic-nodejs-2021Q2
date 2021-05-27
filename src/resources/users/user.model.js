const uuid = require('uuid').v4;

class User {
  /**
   * User model
   * @property {string} id - user id
   * @property {string} name - user name
   * @property {string} login - user login
   * @property {string} password - user password
   */

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
   * Exclude password property
   * @param {User} user - user object with all properties
   * @return {Object<User.id, User.name, User.login>} user object without password property
   */

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
