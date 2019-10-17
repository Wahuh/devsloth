const baseUrl = process.env.API_URL;
const bearerToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';

const responses = {
  [`${baseUrl}/signup`]: ({username, email}) => ({
    headers: {authorization: bearerToken},
    data: {
      user: {
        id: 1,
        username,
        email,
      },
    },
  }),
  [`${baseUrl}/login`]: ({email}) => ({
    headers: {authorization: bearerToken},
    data: {
      user: {
        id: 1,
        username: 'Thanh',
        email,
      },
    },
  }),
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
}

const instance = new MockRequest();

export default instance;
