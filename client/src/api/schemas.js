import {schema} from 'normalizr';

const board = new schema.Entity('boards');
const boards = [board];
const list = new schema.Entity('lists');

export default {
  board,
  boards,
  list,
};
