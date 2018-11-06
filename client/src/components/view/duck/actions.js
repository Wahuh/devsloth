import { SHOW_CHAT, SHOW_TASKS } from "./types";

export const showChat = () => {
    return {
        type: SHOW_CHAT,
    }
}

export const showTasks = () => {
    return {
        type: SHOW_TASKS,
    }
}