import connection from "../database.js";

async function getUserByEmail(email) {
    return connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
    )
  }
  
  async function insertNewUser(name, email, hashedPassword) {
    return connection.query(
      `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
      [name, email, hashedPassword]
    )
  }
  
  export const userRepository = {
    getUserByEmail,insertNewUser
  }