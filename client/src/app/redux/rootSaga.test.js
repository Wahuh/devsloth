import rootSaga from './rootSaga';
import * as commonSaga from '../../common/redux/sagas';
import * as tasksSaga from '../../tasks/redux/sagas';

describe('rootSaga', () => {
  it('invokes the commonSaga', () => {
    const spy = jest.spyOn(commonSaga, 'default');
    const gen = rootSaga();
    gen.next();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('invokes the tasksSaga', () => {
    const spy = jest.spyOn(tasksSaga, 'default');
    const gen = rootSaga();
    gen.next();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
