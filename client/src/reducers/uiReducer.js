import { combineReducers } from "redux";
import { display } from "../features/display/duck/reducers";
import { channels } from "../features/chat/duck/reducers";
import { showGroupModal } from "../features/group/duck/reducers";

const uiReducer = combineReducers({
    showGroupModal,
});

export default uiReducer;