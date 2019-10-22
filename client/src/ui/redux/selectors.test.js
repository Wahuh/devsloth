import {selectIsModalOpen, selectIsFetching} from './selectors';

describe('selectIsModalOpen', () => {
  it('returns false if the modal name does not exist', () => {
    const state = {
      ui: {modals: []},
    };
    const isModalOpen = selectIsModalOpen(state, 'board');
    expect(isModalOpen).toBe(false);
  });

  it('returns true given a modal name', () => {
    const state = {
      ui: {
        modals: ['board'],
      },
    };
    const isModalOpen = selectIsModalOpen(state, 'board');
    expect(isModalOpen).toBe(true);
  });
});

describe('selectIsFetching', () => {
  it('returns false if the request name does not exist', () => {
    const state = {
      ui: {fetching: {}},
    };
    const isFetching = selectIsFetching(state, 'postBoard');
    expect(isFetching).toBe(false);
  });

  it('returns a boolean from state given a request name', () => {
    const state = {
      ui: {
        fetching: {
          postBoard: true,
        },
      },
    };
    const isFetching = selectIsFetching(state, 'postBoard');
    expect(isFetching).toBe(true);
  });
});
