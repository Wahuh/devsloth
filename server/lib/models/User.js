const {Model} = require('objection');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static addOne(user) {
    return this.query().insertAndFetch(user);
  }

  generateAuthToken() {
    const token = jwt.sign({id: this.id}, secret);
    return token;
  }
}

module.exports = User;
