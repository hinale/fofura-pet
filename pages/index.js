const Institution = require("../src/entities/Institution/Institution");
const InstitutionRepository = require('../src/repositories/InstitutionRepository/InstitutionRepository');
const User = require('../src/entities/User/User');
const UserRepository = require('../src/repositories/UserRepository/UserRepository');

// Cria uma nova instituição
const institution1 = new Institution("Fofura Pet", "fofurapet@mail.com", "41912341234", "Rua Palmeiras, 27", "São Paulo", "SP")
console.log("----------ANTES----------");
console.table(institution1);

// Edita a instituição
institution1.editInstitution({address: "Rua Palmeiras, 88"});
console.log("----------DEPOIS----------");
console.table(institution1);

// Cria um novo usuário
const user1 = new User("Maria", "admin", "maria@mail.com", "senha123", "41912341234");
console.log("----------ANTES----------");
console.table(user1)

// Edita o usuário
user1.editUser({phone: "41912345678"});
console.log("----------DEPOIS----------");
console.table(user1)

// Cria lista de instituições e usuários
const
  institutions = new InstitutionRepository(),
  users = new UserRepository();

// Adiciona instituição e usuário já criados
institutions.addInstitution(institution1.name, institution1.email, institution1.phone, institution1.address, institution1.city, institution1.UF);
users.addUser(user1.name, user1.type, user1.email, user1.password, user1.phone);

console.log({ ANTES: { institutions: institutions.allInstitutions, users: users.allUsers } });

// Remove instituição e usuário pelo nome
institutions.removeInstitution(institution1.name);
users.removeUser(user1.name);

console.log({ DEPOIS: { institutions: institutions.allInstitutions, users: users.allUsers } });
