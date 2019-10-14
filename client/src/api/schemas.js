import {schema} from 'normalizr';

const board = new schema.Entity('boards');
const boards = [board];

export default {
  board,
  boards,
};
