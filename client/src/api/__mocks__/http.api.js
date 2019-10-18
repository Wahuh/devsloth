const baseUrl = process.env.API_URL;
const bearerToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';

const responses = {
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
  [`${baseUrl}/boards/1`]: {
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
      const response = responses[url](data);
      resolve(response);
    });
  }
  get(url) {
    return new Promise(resolve => {
      console.log(url);
      const response = responses[url];
      resolve(response);
    });
  }
}

const instance = new MockRequest();

export default instance;
