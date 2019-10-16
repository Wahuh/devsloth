import {normalize} from 'normalizr';
import http from './http.api';
import schemas from './schemas';

export const postList = async ({title, board_id}) => {
  const {data} = await http.post(`/boards/${board_id}/lists`, {title});
  return normalize(data.list, schemas.list);
};

export const getLists = async board_id => {
  const {data} = await http.get(`/boards/${board_id}/lists`);
  return normalize(data.lists, schemas.lists);
};
