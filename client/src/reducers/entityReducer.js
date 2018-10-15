import { combineReducers } from "redux";
import { groups } from "../features/group/duck/reducers";

const entityReducer = combineReducers({
    groups
});

export default entityReducer;