const {Model} = require('objection');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  $formatJson(jsonRaw) {
    const json = super.$formatJson(jsonRaw);
    const {username, email, id} = json;
    return {username, email, id};
  }

  static async addOne(user) {
    try {
      const insertedUser = await this.query()
        .insert(user)
        .returning('*');
      return insertedUser;
    } catch (err) {
      if (err.code === '23505') {
        const emailError = new Error('Email has already been registered');
        emailError.name = 'E1';
        return Promise.reject(emailError);
      }
      return Promise.reject(err);
    }
  }

  generateAuthToken() {
    const token = jwt.sign({id: this.id}, secret);
    return token;
  }
}

module.exports = User;
