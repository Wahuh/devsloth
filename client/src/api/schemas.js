import {schema} from 'normalizr';

const board = new schema.Entity('boards');
const boards = [board];
const list = new schema.Entity('lists');
const lists = [list];

export default {
  board,
  boards,
  list,
  lists,
};
