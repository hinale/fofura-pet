const UserRepository = require("./UserRepository");

describe("class UserRepository", () => {
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  it("should create a user and add it to UserRepository", () => {
    const user = userRepository.addUser('Letícia', 'user', 'leticia@mail.com', 'senha123', '41912341234');
    const result = {
      "name": "Letícia",
      "type": "user",
      "email": "leticia@mail.com",
      "phone": "41912341234"
    };
    expect(user).toEqual(result);
    expect(userRepository.allUsers).toContain(user);
  });

  it("should edit a user's information", () => {
    const user = userRepository.addUser('Lara', 'user', 'lara@mail.com', 'senha123', '41912341234');
    const data = {
      name: "Letícia Amaral",
      email: "leticiaamaral@mail.com"
    };
    const result = {
      "name": "Letícia Amaral",
      "type": "user",
      "email": "leticiaamaral@mail.com",
      "phone": "41912341234"
    };
    user.editUser(data);
    expect(user).toEqual(result);
  });

  it("should return an error when trying to edit with an invalid attribute", () => {
    const user = userRepository.addUser('Letícia', 'user', 'leticia@mail.com', 'senha123', '41912341234');
    const data = {
      name: "Letícia Amaral",
      email: "leticiaamaral@mail.com",
      code: 123
    };
    const result = "code is an invalid information";
    expect(() => user.editUser(data)).toThrow(result);
  });

  it("should get the user's password", () => {
    const user = userRepository.addUser('Letícia', 'user', 'leticia@mail.com', 'senha123', '41912341234');
    expect(user.password).toEqual('senha123');
  });

  it("should set a new password for the user", () => {
    const user = userRepository.addUser('Letícia', 'user', 'leticia@mail.com', 'senha123', '41912341234');
    user.password = 'newPassword123';
    expect(user.password).toEqual('newPassword123');
  });

  it("should delete a user from UserRepository", () => {
    const user = userRepository.addUser('Letícia', 'user', 'leticia@mail.com', 'senha123', '41912341234');
    userRepository.removeUser(user.name)
    expect(userRepository.allUsers).not.toContain(user);
  });
})