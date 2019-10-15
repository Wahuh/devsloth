import {getBoard, postUserBoard, getUserBoards} from './boards.api';
import {getUser} from './me.api';
import {login, signup} from './auth.api';
import {postList} from './lists.api';

export default {
  postList,
  getUserBoards,
  postUserBoard,
  getBoard,
  postTask: () => {},
  getUser,
  login,
  signup,
};
