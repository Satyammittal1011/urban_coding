const uuid = require("uuid");
const knex = require("../database");

async function getUserByEmail(email) {
  return knex("users")
    .select("*")
    .where({ email })
    .then((rows) => {
      return Array.isArray(rows) && rows[0];
    });
}

async function CreateUser(name, email, phone, college_name) {
  userid = uuid.v4();
  const first_name = name.split(" ")[0];
  const last_name = name.split(" ")?.[1];
  return knex("users").insert({
    userd: userid,
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_no: phone,
    college_name: college_name,
  });
}

async function CreateAuthUser(email, HashPassword) {
  return knex("authuser").insert({ email: email, hashpassword: HashPassword });
}

async function getUserPassword(email){
    return knex("authuser")
    .select("hashpassword")
    .where({ email })
    .then((rows) => {
      return Array.isArray(rows) && rows[0];
    });

}



module.exports = { getUserByEmail, CreateUser, CreateAuthUser, getUserPassword };
