const request = require('supertest');
const connection = require('../../database/connection');
const server = require('../../io-server');

describe('/signup', () => {
  it('201: responds with an Authorization header containing Bearer and jwt', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };
    const response = await request(server)
      .get('/signup')
    const {statusCode, headers} = response;
    expect(statusCode).toBe(201);
    expect(headers).toHaveProperty('Authorization');
  });
});
