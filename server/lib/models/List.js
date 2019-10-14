const {Model} = require('objection');

class List extends Model {
  static get tableName() {
    return 'lists';
  }

  static async addOne(list) {
    const insertedList = await this.query().insert(list);
    return insertedList;
  }
}

module.exports = List;
