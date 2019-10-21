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

  static async findByListId(list_id) {
    try {
      const tasks = await this.query()
        .select('*')
        .where({list_id});
      return tasks;
    } catch (err) {
      const error = new Error('adasd');
      return Promise.reject(error);
    }
  }

  static async findByListId(list_id) {
    try {
      const tasks = await this.query()
        .select('*')
        .where({list_id});
      return tasks;
    } catch (err) {
      const error = new Error('adasd');
      return Promise.reject(error);
    }
  }
}

module.exports = Task;
