const {Model} = require('objection');

class Board extends Model {
  static get tableName() {
    return 'boards';
  }
}

module.exports = Board;
