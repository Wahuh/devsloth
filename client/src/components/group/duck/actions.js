import { createAction } from "redux-actions";
import * as types from "./types"

const metaCreator = () => ({ errorType: "group" });

export const createGroupRequest = createAction(types.GROUP_CREATE_REQUEST);
export const createGroupSuccess = createAction(types.GROUP_CREATE_SUCCESS);
export const createGroupFailure = createAction(types.GROUP_CREATE_FAILURE, null, metaCreator);

export const showGroupModal = createAction(types.GROUP_MODAL_SHOW);
export const hideGroupModal = createAction(types.GROUP_MODAL_HIDE);
export const showGroupModalJoin = createAction(types.GROUP_MODAL_CREATE_OR_JOIN_SHOW);
export const hideGroupModalJoin = createAction(types.GROUP_MODAL_CREATE_OR_JOIN_HIDE);
export const showGroupModalCreate = createAction(types.GROUP_MODAL_CREATE_SHOW);
export const hideGroupModalCreate = createAction(types.GROUP_MODAL_CREATE_HIDE);
export const showGroupModalCreateOrJoin = createAction(types.GROUP_MODAL_CREATE_OR_JOIN_SHOW);
export const hideGroupModalCreateOrJoin = createAction(types.GROUP_MODAL_CREATE_OR_JOIN_HIDE);

export const loadCurrentGroupDefault = createAction(types.CURRENT_GROUP_LOAD_DEFAULT);
export const loadCurrentGroup = createAction(types.CURRENT_GROUP_LOAD);
