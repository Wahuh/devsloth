import { combineReducers } from "redux";

import { channelsEntity } from "../components/channel/duck/reducers";
import { groupsEntity } from "../components/group/duck/reducers";
import { tasksEntity } from "../components/tasks/duck/reducers";
import { usersEntity } from "../components/user/duck/reducers";

const entitiesReducer = combineReducers({
    channels: channelsEntity,
    groups: groupsEntity,
    tasks: tasksEntity,
    users: usersEntity,
});

export default entitiesReducer;