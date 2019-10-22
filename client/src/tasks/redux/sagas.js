import {takeEvery, select, all, put, call} from 'redux-saga/effects';
import {MOVE_TASK_SAME_LIST} from './types';
import {selectTasksByListId} from './selectors';
import {updateTask} from './actions';
import {patchTaskPosition} from '../../api/tasks.api';

function* handleMoveSameList({payload}) {
  const {list_id, prevIndex, nextIndex} = payload;
  const tasks = yield select(selectTasksByListId, list_id);

  const task = {...tasks[prevIndex]};

  if (nextIndex === 0) {
    task.position = Math.round(tasks[nextIndex].position / 2);
  } else if (nextIndex === tasks.length - 1) {
    task.position = Math.round(tasks[nextIndex].position + 10000);
  } else if (nextIndex > prevIndex) {
    task.position = Math.round(
      (tasks[nextIndex].position + tasks[nextIndex + 1].position) / 2,
    );
  } else {
    task.position = Math.round(
      (tasks[nextIndex].position + tasks[nextIndex - 1].position) / 2,
    );
  }

  yield put(
    updateTask({entities: {tasks: {[task.id]: task}}, result: task.id}),
  );
  try {
    yield call(patchTaskPosition, task);
  } catch (err) {
    console.log(err);
  }
}

export function* watchMoveTaskSameList() {
  yield takeEvery(MOVE_TASK_SAME_LIST, handleMoveSameList);
}

export default function* tasksSaga() {
  yield all([watchMoveTaskSameList()]);
}
