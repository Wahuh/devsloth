const TestClient = require('./TestClient');
/* TODO 
CREATE THE IO SERVER IN TESTS
*/
describe('TestClient', () => {
  it('can be instantiated with new()', () => {
    //hmmm how is it connecting to the server??
    const client = new TestClient();
    expect(client).toBeTruthy();
  });

  it('has a socket property which defaults to null', () => {
    const client = new TestClient();
    expect(client.socket).toBe(null);
  });

  it('has a rooms property which defaults to an empty array', () => {
    const client = new TestClient();
    expect(client.rooms).toEqual([]);
  });

  describe('connect: async', () => {
    it('connects the socket client to the server and sets isConnected to true', async () => {
      const client = new TestClient();
      await client.connect();
      expect(client.isConnected).toBe(true);
      //check if it is an object
    });
  });
  describe('join: async', () => {
    it('joins a room passed in as a string', async () => {
      const room = '40e6215d-b5c6-4896-987c-f30f3678f608';
      const client = new TestClient();
      await client.connect();
      await client.join(room);
      expect(client.rooms).toEqual([room]);
    });

    it('joins rooms passed in as an array', async () => {
      const rooms = [
        '40e6215d-b5c6-4896-987c-f30f3678f608',
        '40e6215d-b5c6-4896-987c-f30f3678f609',
      ];
      const client = new TestClient();
      await client.connect();
      await client.join(rooms);
      expect(client.rooms).toEqual(rooms);
    });
  });

  // describe('receive', () => {
  //   it('takes an event passed in as an argument, waits for it to be emitted by the socket.io server and resolves the value', () => {
  //     const event = 'update_group';
  //     const client = new TestClient();
  //     await client.connect()
  //   })
  // })
  describe('disconnect', () => {
    it('disconnects the socket client from the server and sets isConnected to false', async () => {
      const client = new TestClient();
      await client.connect();
      client.disconnect();
      expect(client.isConnected).toBe(false);
    });
  });
});
