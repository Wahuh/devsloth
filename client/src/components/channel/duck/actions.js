import { createAction } from "redux-actions";
import * as types from "./types";

const metaCreator = () => ({ errorType: "channel" });

export const createChannelRequest = createAction(types.CHANNEL_CREATE_REQUEST);
export const createChannelSuccess = createAction(types.CHANNEL_CREATE_SUCCESS);
export const createChannelFailure = createAction(types.CHANNEL_CREATE_FAILURE, null, metaCreator);

export const updateChannelRequest = createAction(types.CHANNEL_UPDATE_REQUEST);
export const updateChannelSuccess = createAction(types.CHANNEL_UPDATE_SUCCESS);
export const updateChannelFailure = createAction(types.CHANNEL_UPDATE_FAILURE, null, metaCreator);

export const deleteChannelRequest = createAction(types.CHANNEL_DELETE_REQUEST);
export const deleteChannelSuccess = createAction(types.CHANNEL_DELETE_SUCCESS);
export const deleteChannelFailure = createAction(types.CHANNEL_DELETE_FAILURE, null, metaCreator);

export const selectChannel = createAction(types.CHANNEL_SELECT);