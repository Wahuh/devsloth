const knex = require("knex");

const connection = knex(require("./knexfile"));

const selectAccountByEmail = async (email) => {
  const {
    rows: [account],
  } = await connection.raw(
    `
    SELECT * FROM account 
    WHERE email = ?
    LIMIT 1
  `,
    [email]
  );
  return account;
};

const insertAccount = async (email) => {
  const {
    rows: [account],
  } = await connection.raw(
    `
    INSERT INTO account (email, created_at)
    VALUES (?, NOW())
    RETURNING *
  `,
    [email]
  );
  return account;
};

const insertChallenge = async (random_string) => {
  await connection.raw(
    `
    INSERT INTO challenge (random_string, created_at)
    VALUES (?, NOW())
  `,
    [random_string]
  );
};

const selectChallenge = async (random_string) => {
  const {
    rows: [{ exists }],
  } = await connection.raw(
    `
    SELECT EXISTS(SELECT 1 FROM challenge WHERE random_string = ? AND created_at > NOW() - INTERVAL '10 minutes')
  `,
    [random_string]
  );
  return exists;
};

// const deleteChallenge = async (random_string) => {
//   const res = await connection.raw(
//     `
//     SELECT EXISTS(SELECT 1 FROM challenge WHERE random_string = ?)
//   `,
//     [random_string]
//   );
// };

module.exports = {
  selectAccountByEmail,
  insertChallenge,
  insertAccount,
  selectChallenge,
};
