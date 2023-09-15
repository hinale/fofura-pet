const User = require("../../entities/User/User");

class UserRepository {
  #users = [];

  get allUsers() {
    return this.#users;
  }

  addUser(name, type, email, password, phone) {
    const user = new User(name, type, email, password, phone);
    this.#users.push(user);
    return user;
  }

  removeUser(name) {
    this.#users = this.#users.filter(u => u.name !== name);
  }
}

module.exports = UserRepository;