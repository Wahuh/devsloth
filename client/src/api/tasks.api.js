import {normalize} from 'normalizr';
import http from './http.api';
import schemas from './schemas';

export const postTask = async ({list_id, ...rest}) => {
  const {data} = await http.post(`/lists/${list_id}/tasks`, rest);
  return normalize(data.task, schemas.task);
};

export const getTasks = async ({list_id}) => {
  const {data} = await http.get(`/lists/${list_id}/tasks`);
  return normalize(data.tasks, schemas.tasks);
};
