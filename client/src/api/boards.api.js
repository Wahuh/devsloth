import {normalize} from 'normalizr';
import http from './http.api';
import schemas from './schemas';

export const getBoard = async ({board_id}) => {
  const {data} = await http.get(`/boards/${board_id}`);
  return normalize(data.board, schemas.board);
};

export const getUserBoards = async () => {
  const {data} = await http.get('/me/boards');
  return normalize(data.boards, schemas.boards);
};

export const postUserBoard = async board => {
  const {data} = await http.post('/me/boards', board);
  return normalize(data.board, schemas.board);
};
