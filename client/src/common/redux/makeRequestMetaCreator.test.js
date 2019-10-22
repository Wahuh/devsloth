import makeRequestMetaCreator from './makeRequestMetaCreator';

describe('makeRequestMetaCreator', () => {
  it('returns a function that returns a meta object containing an apiFunction key', () => {
    const metaCreator = makeRequestMetaCreator('getBoard');
    const meta = metaCreator();
    const expectedMeta = {
      apiFunction: 'getBoard',
    };
    expect(meta).toEqual(expectedMeta);
  });
});
