import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';
import {
  watchRequest,
  watchEveryRequest,
  watchStartFetching,
  watchStopFetching,
} from './sagas';
import api from '../../api';
import {startFetching, stopFetching} from '../../ui/redux/actions';

describe('watchRequest', () => {
  it('takes a *_REQUEST action and outputs a *_SUCCESS action', () => {
    const action = {
      type: 'GET_BOARD_REQUEST',
      payload: {
        board_id: 2,
      },
      meta: {
        apiFunction: 'getBoard',
      },
    };

    const expectedResponse = {
      board_id: 2,
      title: 'Hello Board',
    };

    return expectSaga(watchRequest)
      .provide([[matchers.call.fn(api.getBoard), expectedResponse]])
      .put({
        type: 'GET_BOARD_SUCCESS',
        payload: expectedResponse,
        meta: {
          apiFunction: 'getBoard',
        },
      })
      .dispatch(action)
      .run();
  });

  it('takes a *_REQUEST action and outputs a *_FAILURE action', () => {
    const action = {
      type: 'GET_BOARD_REQUEST',
      payload: {
        board_id: 2,
      },
      meta: {
        apiFunction: 'getBoard',
      },
    };

    const err = new Error('request failed');

    return expectSaga(watchRequest)
      .provide([[matchers.call.fn(api.getBoard), throwError(err)]])
      .put({
        type: 'GET_BOARD_FAILURE',
        payload: err,
        error: true,
        meta: {
          apiFunction: 'getBoard',
        },
      })
      .dispatch(action)
      .run();
  });
});

describe('watchEveryRequest', () => {
  it('takes a *_REQUEST_EVERY action and outputs a *_SUCCESS action', () => {
    const action = {
      type: 'CREATE_TASK_REQUEST_EVERY',
      payload: {
        task_id: 2,
      },
      meta: {
        apiFunction: 'postTask',
      },
    };

    const expectedResponse = {
      task_id: 2,
      title: 'Hello Task',
    };

    return expectSaga(watchEveryRequest)
      .provide([[matchers.call.fn(api.postTask), expectedResponse]])
      .put({
        type: 'CREATE_TASK_SUCCESS',
        payload: expectedResponse,
        meta: {
          apiFunction: 'postTask',
        },
      })
      .dispatch(action)
      .run();
  });

  it('takes a *_REQUEST_EVERY action and outputs a *_FAILURE action', () => {
    const action = {
      type: 'CREATE_TASK_REQUEST_EVERY',
      payload: {
        task_id: 2,
      },
      meta: {
        apiFunction: 'postTask',
      },
    };

    const err = new Error('request failed');

    return expectSaga(watchEveryRequest)
      .provide([[matchers.call.fn(api.postTask), throwError(err)]])
      .put({
        type: 'CREATE_TASK_FAILURE',
        payload: err,
        error: true,
        meta: {
          apiFunction: 'postTask',
        },
      })
      .dispatch(action)
      .run();
  });
});

describe('watchStartFetching', () => {
  it('takes a *_REQUEST action and outputs a START_FETCHING action', () => {
    const action = {
      type: 'GET_BOARD_REQUEST',
      payload: {
        board_id: 2,
      },
      meta: {
        apiFunction: 'getBoard',
      },
    };
    return expectSaga(watchStartFetching)
      .put(startFetching('getBoard'))
      .dispatch(action)
      .run();
  });

  it('takes a *_REQUEST_EVERY action and outputs a START_FETCHING action', () => {
    const action = {
      type: 'CREATE_TASK_REQUEST_EVERY',
      payload: {
        task_id: 2,
      },
      meta: {
        apiFunction: 'postTask',
      },
    };

    return expectSaga(watchStartFetching)
      .put(startFetching('postTask'))
      .dispatch(action)
      .run();
  });
});

describe('watchStopFetching', () => {
  it('takes a *_SUCCESS action and outputs a STOP_FETCHING action', () => {
    const action = {
      type: 'GET_BOARD_SUCCESS',
      payload: {
        board_id: 2,
        title: 'hello board',
      },
      meta: {
        apiFunction: 'getBoard',
      },
    };
    return expectSaga(watchStopFetching)
      .put(stopFetching('getBoard'))
      .dispatch(action)
      .run();
  });

  it('takes a *_FAILURE action and outputs a STOP_FETCHING action', () => {
    const action = {
      type: 'CREATE_TASK_FAILURE',
      payload: new Error(),
      meta: {
        apiFunction: 'postTask',
      },
    };

    return expectSaga(watchStopFetching)
      .put(stopFetching('postTask'))
      .dispatch(action)
      .run();
  });
});
