import {schema} from 'normalizr';

const board = new schema.Entity('boards');
const boards = [board];
const list = new schema.Entity('lists');
const lists = [list];
const task = new schema.Entity('tasks');
const tasks = [task];

export default {
  board,
  boards,
  list,
  lists,
  task,
  tasks,
};
