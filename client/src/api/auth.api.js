import http from './http.api';
import config from '../config';

const getJwt = () => localStorage.getItem('jwt');

const extractJwt = headers => {
  const {authorization} = headers;
  if (!authorization) {
    throw new Error('authorization header missing');
  }
  if (/^Bearer\s.+/.test(authorization)) {
    return authorization.substring(7);
  }
  throw new Error('Bearer does not precede the token');
};

const saveJwt = jwt => {
  if (!jwt) throw new Error('Invalid jwt cannot be saved');
  localStorage.setItem('jwt', jwt);
};

const setAuthorizationHeader = jwt => {
  http.setDefaultHeader('Authorization', `Bearer ${jwt}`);
};

const signup = ({email, password, username}) => {
  return http.post(`${config.apiUrl}/signup`, {
    email,
    password,
    username,
  });
};

const login = ({email, password}) => {
  return http.post(`${config.apiUrl}/login`, {
    email,
    password,
  });
};

export default {
  signup,
  login,
  getJwt,
  saveJwt,
  extractJwt,
  setAuthorizationHeader,
};
// export const login = ({email, password}) => {
//   return http.post(LOGIN_ENDPOINT, {
//     email,
//     password,
//   });
// };

// export const logout = () => {
//   localStorage.removeItem('jwt');
// };
