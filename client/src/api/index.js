import {getBoard, postUserBoard} from './boards.api';
import {getUser} from './me.api';
import {login, signup} from './auth.api';

export default {
  postUserBoard,
  getBoard,
  postTask: () => {},
  getUser,
  login,
  signup,
};
