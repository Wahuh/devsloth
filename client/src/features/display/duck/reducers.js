import { DISPLAY_CHAT, DISPLAY_TASKS } from "./types";

const initialState = {
    chat: true,
    tasks: false
};

export function display(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case DISPLAY_CHAT:
            return {
                ...state,
                chat: true,
                tasks: false,
            }
        
        case DISPLAY_TASKS:
            return {
                ...state,
                chat: false,
                tasks: true,
            }

        default:
            return state
    }
}