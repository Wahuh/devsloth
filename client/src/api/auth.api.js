import http from './http.api';

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

// const setJwt = jwt => {
//   const token = jwt.replace('Bearer ', '');
//   localStorage.setItem('jwt', token);
// };

// const setJwtHeader = jwt => {
//   http.setAuthHeader(jwt);
// };

const signup = ({email, password, username}) => {
  return http.post(`${process.env.API_URL}/signup`, {
    email,
    password,
    username,
  });
};

export default {signup, getJwt, saveJwt, extractJwt};
// export const login = ({email, password}) => {
//   return http.post(LOGIN_ENDPOINT, {
//     email,
//     password,
//   });
// };

// export const logout = () => {
//   localStorage.removeItem('jwt');
// };
