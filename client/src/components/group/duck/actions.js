import { createAction } from "redux-actions";
import * as types from "./types"

const metaCreator = () => ({ errorType: "group" });

export const createGroupRequest = createAction(types.GROUP_CREATE_REQUEST);
export const createGroupSuccess = createAction(types.GROUP_CREATE_SUCCESS);
export const createGroupFailure = createAction(types.GROUP_CREATE_FAILURE, null, metaCreator);

export const updateGroupRequest = createAction(types.GROUP_UPDATE_REQUEST);
export const updateGroupSuccess = createAction(types.GROUP_UPDATE_SUCCESS);
export const updateGroupFailure = createAction(types.GROUP_UPDATE_FAILURE, null, metaCreator);

export const deleteGroupRequest = createAction(types.GROUP_DELETE_REQUEST);
export const deleteGroupSuccess = createAction(types.GROUP_DELETE_SUCCESS);
export const deleteGroupFailure = createAction(types.GROUP_DELETE_FAILURE, null, metaCreator);

export const selectGroup = createAction(types.GROUP_SELECT);