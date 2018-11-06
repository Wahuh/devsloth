import { SHOW_CHAT, SHOW_TASKS } from "./types";

const initialState = {
    showChat: true,
    showTasks: false
};

export function view(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case SHOW_CHAT:
            return {
                ...state,
                showChat: true,
                showTasks: false,
            }
        
        case SHOW_TASKS:
            return {
                ...state,
                showChat: false,
                showTasks: true,
            }

        default:
            return state
    }
}