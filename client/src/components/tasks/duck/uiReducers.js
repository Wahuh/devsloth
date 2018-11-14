import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
    showModal: false,
};

const tasks = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type) {
        case types.TASK_MODAL_SHOW:
            return {
                ...state,
                showModal: true,
            };

        case types.TASK_MODAL_HIDE:
            return {
                ...state,
                showModal: false,
            };

        default:
            return state;
    }
};

export default tasks;