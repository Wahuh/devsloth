import { createAction } from "redux-actions";
import { VIEW_CHAT_SHOW, VIEW_TASKS_SHOW } from "./types";

export const showChatView = createAction(VIEW_CHAT_SHOW);
export const showTasksView = createAction(VIEW_TASKS_SHOW);