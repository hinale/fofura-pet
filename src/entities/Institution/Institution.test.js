const Tag = require('../Tag/Tag');
const Institution = require('./Institution');

describe("class Intitution", () => {
  let institution;

  beforeEach(() => {
    institution = new Institution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
  })

  it("should check creating a user", () => {
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
  });

  it("should check a institution changes", () => {
    const 
      data = {
        phone: "412341234"
      },
      result = {
        name: "DoaPet",
        email: "doapet@mail.com",
        phone: "412341234",
        address: "Rua Av. 15 de Setembro, 444 - Centro",
        city: "Curitiba",
        UF: "PR",
        tags: new Tag()
      };

    institution.editInstitution(data);

    expect(institution).toEqual(result);
  });

  it("should check return when a user changes and attribute not be listed", () => {
    const 
      data = {
        phone: "41912341234",
        code: 123
      },
      result = `code is an invalid information`;

    expect(() => institution.editInstitution(data)).toThrow(result);
  })
})