import { combineReducers } from "redux";
import { groups } from "../components/group/duck/reducers";

const entityReducer = combineReducers({
    groups
});

export default entityReducer;