import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
    show: false,
    screens: {
        showCreateOrJoin: true,
        showCreate: false,
        showJoin: false,
    }
};

export const groupModal = (state = initialState, action) => {
    switch(action.type) {
        case types.GROUP_MODAL_SHOW:
            return { ...state, show: true };

        case types.GROUP_MODAL_HIDE:
            return { ...state, show: false };
        
        case types.GROUP_MODAL_CREATE_SHOW:
            return { ...state }

        default:
            return state;
    }
};
