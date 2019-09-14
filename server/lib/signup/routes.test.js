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

describe('POST /api/signup', () => {
  it('200: responds with an error array when the email has already been registered', async () => {
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
      errors: [{status: 200, message: 'Email has already been registered'}],
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

  it('400: responds with an error array when email is missing', async () => {
    const user = {
      username: 'Wahuh',
      password: 'thebestpassword123',
    };
    const expected = {
      errors: [{status: 400, message: 'email field is missing'}],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when username is missing', async () => {
    const user = {
      email: 'tmd@gmail.com',
      password: 'thebestpassword123',
    };
    const expected = {
      errors: [{status: 400, message: 'username field is missing'}],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when username is longer than 32 characters', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      password: 'thebestpassword123',
    };
    const expected = {
      errors: [
        {
          status: 400,
          message: 'username should not be longer than 32 characters',
        },
      ],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when username is shorter than 2 characters', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'W',
      password: 'thebestpassword123',
    };
    const expected = {
      errors: [
        {
          status: 400,
          message: 'username should not be shorter than 2 characters',
        },
      ],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when password is missing', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
    };
    const expected = {
      errors: [{status: 400, message: 'password field is missing'}],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when the password is shorter than 5 characters', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'abc',
    };
    const expected = {
      errors: [
        {
          message: 'password field should not be shorter than 5 characters',
          status: 400,
        },
      ],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });

  it('400: responds with an error array when the password is longer than 32 characters', async () => {
    const user = {
      email: 'tmd@gmail.com',
      username: 'Wahuh',
      password: 'abcdefghijklmnopqrstuvwxyzabcdefg',
    };
    const expected = {
      errors: [
        {
          status: 400,
          message: 'password field should not be longer than 32 characters',
        },
      ],
    };

    const {status, body} = await signupRequest(user);
    expect(status).toBe(400);
    expect(body).toEqual(expected);
  });
});

describe('INVALID METHOD /signup', () => {
  it('405: responds with an error array when an invalid method is used', () => {
    const methods = ['get', 'put', 'patch', 'delete'];
    const promises = methods.map(method => {
      return request(server)
        [method]('/api/signup')
        .then(response => {
          const {status} = response;
          expect(status).toBe(405);
        });
    });
    return Promise.all(promises);
  });
});
