import { createAction } from "redux-actions";
import { QUERY_LIST_START, QUERY_LIST_CANCEL } from "./types";

export const startListQuery = createAction(QUERY_LIST_START);
export const cancelListQuery = createAction(QUERY_LIST_CANCEL);