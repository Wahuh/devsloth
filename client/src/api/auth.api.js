import http, {setDefaultHeader} from './http.api';
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
  setDefaultHeader('Authorization', `Bearer ${jwt}`);
};

export const signup = async user => {
  const {data, headers} = await http.post(`${config.apiUrl}/signup`, user);
  const jwt = extractJwt(headers);
  saveJwt(jwt);
  setAuthorizationHeader(jwt);
  return data.user;
};

export const login = ({email, password}) => {
  const {data, headers} = http.post(`${config.apiUrl}/login`, {
    email,
    password,
  });
  const jwt = extractJwt(headers);
  saveJwt(jwt);
  setAuthorizationHeader(jwt);
  return data.user;
};

export default {
  getJwt,
  saveJwt,
  extractJwt,
  setAuthorizationHeader,
};

// export const logout = () => {
//   localStorage.removeItem('jwt');
// };
