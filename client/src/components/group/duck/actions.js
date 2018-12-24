import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";

import {
    GROUP_CREATE_REQUEST,
    GROUP_CREATE_SUCCESS,
    GROUP_CREATE_FAILURE,

    GROUP_UPDATE_REQUEST,
    GROUP_UPDATE_SUCCESS,
    GROUP_UPDATE_FAILURE,

    GROUP_DELETE_REQUEST,
    GROUP_DELETE_SUCCESS,
    GROUP_DELETE_FAILURE,

    GROUP_SELECT
} from "./types";

const payloadCreator = (data) => normalize(data, schemas.group);
const metaCreator = () => ({ errorType: "group" });

export const createGroupRequest = createAction(GROUP_CREATE_REQUEST);
export const createGroupSuccess = createAction(GROUP_CREATE_SUCCESS, payloadCreator);
export const createGroupFailure = createAction(GROUP_CREATE_FAILURE, null, metaCreator);

export const updateGroupRequest = createAction(GROUP_UPDATE_REQUEST);
export const updateGroupSuccess = createAction(GROUP_UPDATE_SUCCESS, payloadCreator);
export const updateGroupFailure = createAction(GROUP_UPDATE_FAILURE, null, metaCreator);

export const deleteGroupRequest = createAction(GROUP_DELETE_REQUEST);
export const deleteGroupSuccess = createAction(GROUP_DELETE_SUCCESS, payloadCreator);
export const deleteGroupFailure = createAction(GROUP_DELETE_FAILURE, null, metaCreator);

export const selectGroup = createAction(GROUP_SELECT, _id => payloadCreator({ _id }));
