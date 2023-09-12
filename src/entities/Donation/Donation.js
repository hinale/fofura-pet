const Institution = require('../Institution/Institution');

class Donation {
  institution = null;
  pixKey = "";
  #donations = 0;

  setInstitution(institution) {
    if(institution instanceof Institution) {
      this.institution = institution;
    } else {
      throw new Error("Invalid institution");
    }
  }

  setPixKey(key) {
    this.pixKey = key;
  }

  makeDonation(amount) {
    if (this.institution) {
      if (!this.pixKey) {
        throw new Error('PIX key is not set');
      }

      this.#donations += amount;
    } else {
      throw new Error('No institution set for donation');
    }
  }

  get donations() {
    return this.#donations;
  }
}