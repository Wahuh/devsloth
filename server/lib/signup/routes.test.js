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

const signupRequest = async user => {
  const response = await request(server)
    .post('/api/signup')
    .send(user);
  return response;
};

describe('POST /signup', () => {
  it('200: responds with an error message when the email has already been registered', async () => {
    const testUser = {
      email: 'test@gmail.com',
      username: 'Tester',
      password: 'testing123',
    };
    await addTestUser(testUser);
    const user = {
      email: 'test@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };
    const expected = expect.objectContaining({
      message: 'Email has already been registered',
    });

    const {status, body} = await signupRequest(user);
    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });

  it('201: responds with an Authorization header containing Bearer and jwt', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };

    const {status, headers} = await signupRequest(user);
    const {authorization} = headers;
    expect(status).toBe(201);
    expect(headers).toHaveProperty('authorization');
    expect(/^Bearer\s.+/.test(authorization)).toBe(true);
  });

  it('201: responds with a user object that contains an id, username and email but no password', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'thebestpassword123',
    };
    const expected = expect.objectContaining({
      user: {
        id: expect.any(Number),
        email: 'tmd@gmail.com',
        username: 'Wahuh',
      },
    });

    const {status, body} = await signupRequest(user);
    expect(status).toBe(201);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error message when email is missing', async () => {
    const user = {
      username: 'Wahuh',
      password: 'thebestpassword123',
    };
    const expected = {
      errors: [{message: 'email field is missing'}],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  // it('400: responds with an error message when username is missing', async () => {
  //   const user = {
  //     email: 'tmd@gmail.com',
  //     password: 'thebestpassword123',
  //   };
  //   const expected = {
  //     errors: [{message: 'username field is missing'}],
  //   };

  //   const {status, body} = await signupRequest(user);
  //   expect(status).toBe(400);
  //   expect(body).toEqual(expected);
  // });

  // const testCases = [
  //   {user: {}, situation: 'email is missing'},
  //   {user: {}, situation: 'username is missing'},
  //   {user: {}, situation: 'password is missing'},
  //   {user: {}, situation: ''},
  // ];

  // it('POST 400: ', async () => {

  // });
});
