const bearerToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';

const postResponses = {
  '/signup': ({username, email}) => ({
    headers: {authorization: bearerToken},
    data: {
      user: {
        id: 1,
        username,
        email,
      },
    },
  }),
  '/login': ({email}) => ({
    headers: {authorization: bearerToken},
    data: {
      user: {
        id: 1,
        username: 'Thanh',
        email,
      },
    },
  }),
  '/me/boards': ({title}) => ({
    data: {board: {id: 1, title, owner_id: 2}},
  }),
};

const getResponses = {
  '/me/boards': {
    data: {boards: [{id: 1, title: 'hello board', owner_id: 2}]},
  },
  '/boards/1': {
    data: {board: {id: 1, title: 'hello board', owner_id: 2}},
  },
};

const headers = {};

export const setDefaultHeader = (header, value) => {
  headers[header] = value;
};

/* eslint-disable */
class MockRequest {
  baseUrl = process.env.API_URL;

  post(url, data) {
    return new Promise(resolve => {
      const response = postResponses[url](data);
      resolve(response);
    });
  }
  get(url) {
    return new Promise(resolve => {
      const response = getResponses[url];
      resolve(response);
    });
  }
}

const instance = new MockRequest();

export default instance;
