const Institution = require('../../entities/Institution/Institution');

class InstitutionRepository {
  #institutions = [];

  get allInstitutions() {
    return this.#institutions;
  }

  addInstitution(name, email, phone, address, city, UF) {
    const institution = new Institution(name, email, phone, address, city, UF);
    this.#institutions.push(institution);
    return institution;
  }

  removeInstitution(name) {
    this.#institutions = this.#institutions.filter(i => i.name !== name);
  }
}

module.exports = InstitutionRepository;