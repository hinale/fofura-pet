class User {
  name;
  type;
  email;
  #password;
  phone;

  constructor(name, type, email, password, phone) {
    this.name = name;
    this.type = type;
    this.email = email;
    this.#password = password;
    this.phone = phone;
  }

  get password() {
    return this.#password
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  editUser(data) {
    for(const key in data) {
      if(this.hasOwnProperty(key)) {
        this[key] = data[key];
      } else {
        throw new Error(`${key} is an invalid information`);
      }
    }
  }
}

module.exports = User;