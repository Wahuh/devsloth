import * as types from "./types";
import * as constants from "../constants"
import { combineReducers } from "redux";

const initialState = {
    selectedGroup: "group1",
    byId: {
        "group1": {
            id: "group1",
            name: "All the weebs",
            channels: ["channel1", "channel2"],
        },

        "group2": {
            id: "group2",
            name: "All Might Fanclub",
            channels: ["channel3", "channel4"],
        },
    },
    allIds: [
        "group1",
        "group2",
    ],
}

function addChannel(state, action) {

}

const group = (state, action) => {
    switch(action.type) {
        case types.CREATE_GROUP:
            return {
                id: action.payload.id,
                name: action.payload.name
            };

        default:
            return state;
    }
};

const groupsById = (state = initialState.byId, action) => {
    switch(action.type) {
        case types.CREATE_GROUP:
        case types.JOIN_GROUP:
            return {
                ...state,
                [action.payload.id]: group(state[action.payload.id], action),
            };

        case "ADD_CHANNEL":
            return addChannel(state, action);
        
        default: 
            return state;
    }
};

const allGroupIds = (state = initialState.allIds, action) => {
    switch(action.type) {
        case types.CREATE_GROUP:
        case types.JOIN_GROUP:
            console.log([...state, action.payload.id]);
            return [...state, action.payload.id]
        default:
            return state;
    }
}


export const groups = combineReducers({
    byId: groupsById,
    allIds: allGroupIds,
});


const initalGroupModalState = {
    show: false,
    screen: constants.CREATE_OR_JOIN_GROUP_SCREEN
};

export function groupModal(state = initalGroupModalState, action) {
    switch (action.type) {
        case types.HIDE_GROUP_MODAL:
            return {
                ...state,
                show: false
            };

        case types.SHOW_GROUP_MODAL:
            return {
                ...state,
                show: true
            }

        case types.CHANGE_GROUP_MODAL_SCREEN:
            return {
                ...state,
                screen: action.payload.screen,
            }

        default:
            return state;
    }
}