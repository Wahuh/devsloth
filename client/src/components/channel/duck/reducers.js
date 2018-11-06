import { combineReducers } from "redux";

const initialState = {
    selectedChannel: "group1",
    byId: {
        "channel1": {
            id: "channel1",
            name: "general",
        },

        "channel2": {
            id: "channel2",
            name: "all",
        },
    },
    allIds: [
        "channel1",
        "channel2",
    ],
}

const channelsById = (state = initialState.byId, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

const allChannelIds = (state = initialState.allIds, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const channels = combineReducers({
    byId: channelsById,
    allIds: allChannelIds,
});