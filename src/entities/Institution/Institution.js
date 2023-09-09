class Institution {
  name;
  email;
  phone;
  address;
  city;
  UF;

  constructor(name, email, phone, address, city, UF) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.UF = UF;
  }

  editInstitution(data) {
    for(const key in data) {
      if(this.hasOwnProperty(key)) {
        this[key] = data[key];
      } else {
        throw new Error(`${key} is an invalid information`);
      }
    }
  }
}

module.exports = Institution;