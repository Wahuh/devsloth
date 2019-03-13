import { combineReducers } from "redux";

import errorsReducer from "./errorsReducer";
import uiReducer from "../components/ui/duck/reducers";

import auth from "../components/auth/duck/reducers";

import channels from "../components/channel/duck/reducers";
import groups from "../components/group/duck/reducers";
import members from "../components/members/duck/reducers";
import messages from "../components/messages/duck/reducers";
import tasks from "../components/tasks/duck/reducers";
import user from "../components/user/duck/reducers";
import lists from "../components/lists/duck/reducers";
import connection from "../components/socket/duck/reducers";
import invites from "../components/invites/duck/reducers";
import { AUTH_LOGOUT_SUCCESS } from "../components/auth/duck/types";

const appReducer = combineReducers({
    errors: errorsReducer,
    ui: uiReducer,
    auth,
    channels,
    connection,
    groups,
    lists,
    tasks,
    members,
    messages,
    user,
    invites
});

const rootReducer = (state, action) => {
    if (action.type === AUTH_LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action)
};

export default rootReducer;