import http from './http.api';
import {setAuthorizationHeader} from './auth.api';

/* eslint-disable */
export const getUser = async jwt => {
  setAuthorizationHeader(jwt);
  const {data} = await http.get('/me');
  return data.user;
};
/* eslint-enable */
