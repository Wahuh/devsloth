const {Model} = require('objection');

class Board extends Model {
  static get tableName() {
    return 'boards';
  }

  static async addOne(board) {
    const insertedBoard = await this.query().insert(board);
    return insertedBoard;
  }

  static async findById(id) {
    const board = await this.query().findById(id);
    if (!board) {
      const error = new Error('board not found');
      error.name = 'E200';
      return Promise.reject(error);
    }
    return board;
  }

  async update(board) {
    try {
      const updatedBoard = await this.$query()
        .update(board)
        .where({id: this.id})
        .returning('*');
      return updatedBoard;
    } catch (err) {
      return Promise.reject(new Error('board update failed'));
    }
  }
}

module.exports = Board;
