const Institution = require('../Institution/Institution');

class Donation {
  institution = null;
  pixKey = "";

  static #donations = {
    allValue: 0,
    info: []
  };

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
    this.validateDonation();
    this.processDonation(amount);
  }

  validateDonation() {
    if(!this.institution) {
      throw new Error('No institution set for donation');
    }

    if(!this.pixKey) {
      throw new Error('PIX key is not set');
    }
  }

  processDonation(amount) {
    const donationInfo = {
      institution: this.institution.name,
      pixKey: this.pixKey,
      amount,
    };

    Donation.#donations.allValue += amount;
    Donation.#donations.info.push(donationInfo);
  }

  static get donations() {
    return this.#donations;
  }
}

module.exports = Donation;