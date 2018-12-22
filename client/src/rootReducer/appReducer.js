import { combineReducers } from "redux";

import errorsReducer from "./errorsReducer";
import uiReducer from "../components/ui/duck/reducers";

import auth from "../components/auth/duck/reducers";

import channels from "../components/channel/duck/reducers";
import groups from "../components/group/duck/reducers";
import members from "../components/members/duck/reducers";
import messages from "../components/chat/duck/reducers";
import tasks from "../components/tasks/duck/reducers";

const appReducer = combineReducers({
    errors: errorsReducer,
    ui: uiReducer,
    auth,
    channels,
    groups,
    tasks,
    members,
    messages,
});

export default appReducer;

