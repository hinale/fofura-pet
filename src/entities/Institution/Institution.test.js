const Intitution = require('./Institution');

describe("class Intitution", () => {
  let institution;

  beforeEach(() => {
    institution = new Intitution("DoaPet", "doapet@mail.com", "senha123", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
  })

  it("should check creating a user", () => {
    const result = {
      name: "DoaPet",
      email: "doapet@mail.com",
      phone: "41912341234",
      address: "Rua Av. 15 de Setembro, 444 - Centro",
      city: "Curitiba",
      UF: "PR"
    };

    expect(institution).toEqual(result);
  });

  it("should check get password function", () => {
    expect(institution.password).toEqual("senha123");
  });

  it("should check set password function", () => {
    institution.password = "password123";

    expect(institution.password).toEqual("password123");
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
        UF: "PR"
      };

    institution.editIntitution(data);

    expect(institution).toEqual(result);
  });
})