const request = require('supertest');
const server = require('../../io-server');
const {setupAll, teardownEach, teardownAll, addTestUser} = require('../utils');

beforeAll(async done => {
  await setupAll();
  done();
});

afterAll(async done => {
  await teardownAll();
  done();
});

beforeEach(async done => {
  await teardownEach();
  done();
});

afterEach(() => {
  server.close();
});

describe('POST /signup', () => {
  it('200: responds with an error message when the email has already been registered', async () => {
    await addTestUser({
      email: 'test@gmail.com',
      username: 'Tester',
      password: 'testing123',
    });

    const user = {
      email: 'test@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const response = await request(server)
      .post('/api/signup')
      .send(user);

    const {statusCode, body} = response;
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({message: 'Email has already been registered'}),
    );
  });

  it('201: responds with an Authorization header containing Bearer and jwt', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const response = await request(server)
      .post('/api/signup')
      .send(user);

    const {statusCode, headers} = response;
    expect(statusCode).toBe(201);
    expect(headers).toHaveProperty('authorization');
    const {authorization} = headers;
    expect(/^Bearer\s.+/.test(authorization)).toBe(true);
  });

  it('201: responds with a user object that contains an id, username and email but no password', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const response = await request(server)
      .post('/api/signup')
      .send(user);

    const {statusCode, body} = response;
    expect(statusCode).toBe(201);
    expect(body).toEqual(
      expect.objectContaining({
        user: {
          id: expect.any(Number),
          email: 'tmd@gmail.com',
          username: 'Wahuh',
        },
      }),
    );
  });

  it('POST 400: responds with an error message when email is missing', async () => {
    const response = await request(server)
      .post('/signup')
      .send({
        username: 'Wahuh',
        password: 'thebestpassword123',
      });

    const {statusCode, body} = response;
    expect(statusCode).toBe(400);
    expect(body).toEqual(
      expect.objectContaining({
        message: 'hello',
      }),
    );
  });

  // const testCases = [
  //   {user: {}, situation: 'email is missing'},
  //   {user: {}, situation: 'username is missing'},
  //   {user: {}, situation: 'password is missing'},
  //   {user: {}, situation: ''},
  // ];

  // it('POST 400: ', async () => {

  // });
});
