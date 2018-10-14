import { DISPLAY_CHAT, DISPLAY_TASKS } from "./types";

export const displayChat = () => {
    return {
        type: DISPLAY_CHAT,
    }
}

export const displayTasks = () => {
    return {
        type: DISPLAY_TASKS,
    }
}