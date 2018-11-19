import { VIEW_CHAT_SHOW, VIEW_TASKS_SHOW } from "./types";

const initialState = {
    showChat: true,
    showTasks: false
};

export function view(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case VIEW_CHAT_SHOW:
            return {
                showChat: true,
                showTasks: false,
            }
        
        case VIEW_TASKS_SHOW:
            return {
                showChat: false,
                showTasks: true,
            }

        default:
            return state
    }
}