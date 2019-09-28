const {Model} = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static async addOne(task) {
    try {
      const insertedTask = await this.query().insert(task);
      return insertedTask;
    } catch (err) {
      const error = new Error('List not found');
      error.name = 'E200';
      return Promise.reject(error);
    }
  }
}

module.exports = Task;
