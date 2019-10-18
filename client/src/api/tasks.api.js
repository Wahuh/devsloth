import {normalize} from 'normalizr';
import http from './http.api';
import schemas from './schemas';

/* eslint-disable */
export const postTask = async ({title, list_id}) => {
  const {data} = await http.post(`/lists/${list_id}/tasks`, {title});
  return normalize(data.task, schemas.task);
};
/* eslint-enable */
