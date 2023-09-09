class User {
  name;
  type;
  email;
  #password;
  phone;

  static allUsers = [];

  constructor(name, type, email, password, phone) {
    this.name = name;
    this.type = type;
    this.email = email;
    this.#password = password;
    this.phone = phone;

    User.allUsers.push(this);
  }

  get password() {
    return this.#password
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  edit(data) {
    for(const element in data) {
      if(this.hasOwnProperty(element)) {
        this[element] = data[element];
      } else {
        return `${data[element]} is an invalid information`;
      }
    }
  }

  delete() {
    User.allUsers = User.allUsers.filter(user => user !== this);
  }
}

module.exports = User;