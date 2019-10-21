const {Model} = require('objection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const shortid = require('shortid');
const {secret} = require('../../config');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert() {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }

  $formatJson(jsonRaw) {
    const json = super.$formatJson(jsonRaw);
    const {username, email, id, room} = json;
    return {username, email, id, room};
  }

  static get relationMappings() {
    // eslint-disable-next-line
    const Board = require('./Board');

    return {
      boards: {
        relation: Model.HasManyRelation,
        modelClass: Board,
        filter: {owner_type: 'user'},
        join: {
          from: 'users.id',
          to: 'boards.owner_id',
        },
      },
    };
  }

  async findBoards() {
    try {
      const boards = await this.$relatedQuery('boards').where({
        owner_type: 'user',
      });
      return boards;
    } catch (err) {
      return Promise.reject(new Error('Boards not found'));
    }
  }

  static async findById(id) {
    try {
      const user = await this.query().findById(id);
      if (!user) {
        const error = new Error('User not found');
        error.name = 'E200';
        throw error;
      }
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async addOne(user) {
    try {
      const insertedUser = await this.query()
        .insert({...user, room: shortid.generate()})
        .returning('*');
      return insertedUser;
    } catch (err) {
      if (err.code === '23505') {
        const emailError = new Error('Email has already been registered');
        emailError.name = 'E100';
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
