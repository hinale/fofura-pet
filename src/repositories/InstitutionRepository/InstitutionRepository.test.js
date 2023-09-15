const Tag = require("../../entities/Tag/Tag");
const InstitutionRepositoty = require("./InstitutionRepository");

describe("class InstitutionRepository", () => {
  let institutionRepository;

  beforeEach(() => {
    institutionRepository = new InstitutionRepositoty();
  });

  it("should create a user and add it to institutionRepository", () => {
    const institution = institutionRepository.addInstitution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
    const result = {
      name: "DoaPet",
      email: "doapet@mail.com",
      phone: "41912341234",
      address: "Rua Av. 15 de Setembro, 444 - Centro",
      city: "Curitiba",
      UF: "PR",
      tags: new Tag()
    };
    expect(institution).toEqual(result);
    expect(institutionRepository.allInstitutions).toContain(institution);
  });

  it("should edit a institution's information", () => {
    const institution = institutionRepository.addInstitution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
    const data = {
      name: "Doa Pet",
      address: "Rua 7 de Setembro, 445 - Centro"
    };
    const result = {
      name: "Doa Pet",
      email: "doapet@mail.com",
      phone: "41912341234",
      address: "Rua 7 de Setembro, 445 - Centro",
      city: "Curitiba",
      UF: "PR",
      tags: new Tag()
    };
    institution.editInstitution(data);
    expect(institution).toEqual(result);
  });

  it("should return an error when trying to edit with an invalid attribute", () => {
    const institution = institutionRepository.addInstitution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
    const data = {
      name: "Doa Pet",
      address: "Rua 7 de Setembro, 445 - Centro",
      code: 123
    };
    const result = "code is an invalid information";
    expect(() => institution.editInstitution(data)).toThrow(result);
  });

  it("should delete a user from IntitutionRepository", () => {
    const institution = institutionRepository.addInstitution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
    institutionRepository.removeInstitution(institution.name)
    expect(institutionRepository.allInstitutions).not.toContain(institution);
  });
})