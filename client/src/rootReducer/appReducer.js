import { combineReducers } from "redux";
import uiReducer from "./uiReducer"
import { channels } from "../components/channel/duck/reducers";
import { groups } from "../components/group/duck/reducers";
import entityReducer from "./entityReducer";
import { user } from "../components/user/duck/reducers";
import { auth } from "../components/auth/duck/reducers";
import tasks from "../components/tasks/duck/reducers";

const appReducer = combineReducers({
    ui: uiReducer,
    entities: entityReducer,
    groups,
    user,
    channels,
    auth,
    tasks,
});

export default appReducer;