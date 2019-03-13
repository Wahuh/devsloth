import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";

import {
    LIST_CREATE_REQUEST,
    LIST_CREATE_SUCCESS,
    LIST_CREATE_FAILURE,
    LIST_CREATE_RECEIVE,

    LIST_DELETE_REQUEST,
    LIST_DELETE_SUCCESS,
    LIST_DELETE_FAILURE,
    LIST_DELETE_RECEIVE,

    LIST_UPDATE_REQUEST,
    LIST_UPDATE_SUCCESS,
    LIST_UPDATE_FAILURE,
    LIST_UPDATE_RECEIVE,
    LIST_ADD,
    LIST_REMOVE,
    LIST_EDIT
} from "./types";

const payloadCreator = (data) => normalize(data, schemas.list);
const metaCreator = () => ({ errorType: "list" });
const meta = (event = null, toast = null, errorType = "list") => () => ({ event, toast, errorType })

export const createListRequest = createAction(LIST_CREATE_REQUEST);
export const createListSuccess = createAction(LIST_CREATE_SUCCESS, payloadCreator, 
    meta(null, {
        message: "List created successfully!",
        duration: 3000,
        status: "success"
    })
);
export const createListFailure = createAction(LIST_CREATE_FAILURE, null, metaCreator);

export const updateListRequest = createAction(LIST_UPDATE_REQUEST);
export const updateListSuccess = createAction(LIST_UPDATE_SUCCESS, payloadCreator);
export const updateListFailure = createAction(LIST_UPDATE_FAILURE, null, metaCreator);

export const deleteListRequest = createAction(LIST_DELETE_REQUEST);
export const deleteListSuccess = createAction(LIST_DELETE_SUCCESS, payloadCreator);
export const deleteListFailure = createAction(LIST_DELETE_FAILURE, null, metaCreator);

export const receiveListCreate = createAction(LIST_CREATE_RECEIVE, payloadCreator);
export const receiveListDelete = createAction(LIST_DELETE_RECEIVE, payloadCreator);
export const receiveListUpdate = createAction(LIST_UPDATE_RECEIVE, payloadCreator);

export const addList = createAction(LIST_ADD);
export const removeList = createAction(LIST_REMOVE);
export const editList = createAction(LIST_EDIT);