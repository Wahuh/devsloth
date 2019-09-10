import {combineReducers} from 'redux';
import auth from '../../auth/redux/reducers';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
