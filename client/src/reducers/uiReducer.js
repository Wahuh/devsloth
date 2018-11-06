import { combineReducers } from "redux";
import { view } from "../components/view/duck/reducers";
import { channels } from "../components/chat/duck/reducers";
import { groupModal } from "../components/group/duck/reducers";
import { loginModal } from "../components/auth/duck/reducers";

const uiReducer = combineReducers({
    groupModal,
    loginModal,
    view,
});

export default uiReducer;