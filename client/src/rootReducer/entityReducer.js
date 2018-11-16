import { combineReducers } from "redux";
import { groups } from "../components/group/duck/reducers";
import { user } from "../components/user/duck/reducers";

const entityReducer = combineReducers({
    groups,
    user,
});

export default entityReducer;