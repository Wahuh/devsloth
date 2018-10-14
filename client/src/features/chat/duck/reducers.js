import { CHANGE_CHANNEL } from "./types";

const initialState = {
    current: "channel1",
    byId: {
        "channel1": {
            id: "channel1",
            group: "group1",
            name: "#general",
            messages: ["message1", "message2"]
        },

        "channel2": {
            id: "channel2",
            group: "group1",
            name: "#random",
            messages: ["message3", "message4"]
        },
    },
    allIds: ["channel1", "channel2"],
}

export function channels(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHANNEL:
            return {
                ...state,
                name: action.name
            }
        
        default:
            return state;
    }
}

