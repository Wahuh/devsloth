const {Model} = require('objection');

class Board extends Model {
  static get tableName() {
    return 'boards';
  }

  static async addOne(board) {
    const insertedBoard = await this.query().insert(board);
    return insertedBoard;
  }
}

module.exports = Board;
