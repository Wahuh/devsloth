import {getBoard, postUserBoard, getUserBoards} from './boards.api';
import {getUser} from './me.api';
import {login, signup} from './auth.api';

export default {
  getUserBoards,
  postUserBoard,
  getBoard,
  postTask: () => {},
  getUser,
  login,
  signup,
};
