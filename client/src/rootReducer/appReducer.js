import { combineReducers } from "redux";

import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import resultReducer from "./resultReducer";
import uiReducer from "./uiReducer"

import { auth } from "../components/auth/duck/reducers";
import { currentGroup } from "../components/group/duck/reducers";
import { currentUser } from "../components/user/duck/reducers";
import { currentChannel } from "../components/channel/duck/reducers";


const appReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    result: resultReducer,
    ui: uiReducer,

    auth,
    currentChannel,
    currentGroup,
    currentUser,
});

export default appReducer;