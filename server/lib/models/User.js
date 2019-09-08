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

  static addOne(user) {
    return this.query()
      .insert(user)
      .returning(['email', 'username', 'id']);
  }

  generateAuthToken() {
    const token = jwt.sign({id: this.id}, secret);
    return token;
  }
}

module.exports = User;
