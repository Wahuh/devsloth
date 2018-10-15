import { combineReducers } from "redux";
import { display } from "../features/display/duck/reducers";
import { channels } from "../features/chat/duck/reducers";
import { groupModal } from "../features/group/duck/reducers";

const uiReducer = combineReducers({
    groupModal,
});

export default uiReducer;