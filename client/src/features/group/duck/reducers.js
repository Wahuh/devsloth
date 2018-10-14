import * as types from "./types";

const initiaState = {
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
    allIds: ["group1", "group2"],
}

const groupL = [
    {name: "Wahadh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
    {name: "Wahuh"},
];

export function groups(state = groupL, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function groups2(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function showGroupModal(state = false, action) {
    switch (action.type) {
        case types.HIDE_GROUP_MODAL:
            return false;

        case types.SHOW_GROUP_MODAL:
            return true;

        default:
            return state;
    }
}