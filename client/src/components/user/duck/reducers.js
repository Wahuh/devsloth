import { combineReducers } from "redux";
import * as types from "./types";

const byId = (state = {}, action) => {
    const { type, payload } = action;
    switch(type) {

        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    const { type, payload } = action;
    switch(type) {
        default:
            return state;
    }
}

const currentId = (state = null, action) => {
    const { type, payload } = action;
    switch(type) {
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    allIds,
    currentId
});