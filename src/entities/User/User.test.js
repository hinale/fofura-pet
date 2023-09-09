const User = require('./User');

describe("class Institution", () => {
  let user, password;
  
  beforeAll(() => {
    password = "senha123"
    user = new User("Letícia", "user", "leticia@mail.com", password, "41912341234");
  });
  
  it("Check when creating a user", () => {
    const 
      result = {
        "name": "Letícia",
        "type": "user",
        "email": "leticia@mail.com",
        "phone": "41912341234"
      };

    expect(user).toEqual(result);
  });

  it("Check when a user changes", () => {
    const 
      data = {
        name: "Letícia Amaral",
        email: "leticiaamaral@mail.com"
      },
      result = {
        "name": "Letícia Amaral",
        "type": "user",
        "email": "leticiaamaral@mail.com",
        "phone": "41912341234"
      }

    user.edit(data);

    expect(user).toEqual(result);
  });

  it("Check return when a user changes and attribute not be listed", () => {
    const 
      data = {
        name: "Letícia Amaral",
        email: "leticiaamaral@mail.com",
        code: 123
      },
      result = `${data.code} is an invalid information`;

    expect(user.edit(data)).toEqual(result);
  })

  it("Check get password function", () => {
    expect(user.password).toEqual(password);
  });

  it("Check set password function", () => {
    password = "pass123";
    user.password = password;
    expect(user.password).toEqual(password);
  });

  it("Check the delete user function", () => {
    const result = user;
    user.delete();

    expect(User.allUsers).not.toContain(result);
  });
});