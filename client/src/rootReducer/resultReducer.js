import { combineReducers } from "redux";
import { channelsResult } from "../components/channel/duck/reducers";
import { groupsResult } from "../components/group/duck/reducers";
import { tasksResult } from "../components/tasks/duck/reducers";
import { usersResult } from "../components/user/duck/reducers";

const resultReducer = combineReducers({
    channels: channelsResult,
    groups: groupsResult,
    tasks: tasksResult,
    users: usersResult,
});

export default resultReducer;