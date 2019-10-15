import {normalize} from 'normalizr';
import http from './httpApi';
import schemas from './schemas';

export const postList = async ({title, board_id}) => {
  const {data} = await http.post(`/boards/${board_id}/lists`, {title});
  return normalize(data.list, schemas.list);
};

export const getList = async () => {};
