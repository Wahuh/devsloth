import http from './http.api';
import authApi from './auth.api';

export const getUser = async jwt => {
  authApi.setAuthorizationHeader(jwt);
  const {data} = await http.get('/me');
  return data.user;
};
