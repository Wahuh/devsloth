import { combineReducers } from "redux";
import { view } from "../components/view/duck/reducers";
import { channels } from "../components/chat/duck/reducers";
import { groupModal } from "../components/group/duck/uiReducers";
import { loginModal, registrationLoading ,showAuthentication } from "../components/auth/duck/reducers";
import tasks from "../components/tasks/duck/uiReducers";

const uiReducer = combineReducers({
    groupModal,
    loginModal,
    view,
    showAuthentication,
    registrationLoading,
    tasks,
});


export default uiReducer;