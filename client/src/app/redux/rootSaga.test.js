import rootSaga from './rootSaga';
import * as commonSaga from '../../common/redux/sagas';

describe('rootSaga', () => {
  it('invokes the commonSaga', () => {
    const spy = jest.spyOn(commonSaga, 'default');
    const gen = rootSaga();
    gen.next();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
