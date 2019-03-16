import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";
import { createChannelData, updateChannelData, deleteChannelData } from "../../../tests/data/channel";

import {
    CHANNEL_CREATE_REQUEST,
    CHANNEL_CREATE_SUCCESS,
    CHANNEL_CREATE_FAILURE,

    CHANNEL_UPDATE_REQUEST,
    CHANNEL_UPDATE_SUCCESS,
    CHANNEL_UPDATE_FAILURE,

    CHANNEL_DELETE_REQUEST,
    CHANNEL_DELETE_SUCCESS,
    CHANNEL_DELETE_FAILURE,

    CHANNEL_SELECT,
    CHANNEL_CONNECT,
    CHANNEL_CREATE_RECEIVE,
    CHANNEL_UPDATE_RECEIVE,
    CHANNEL_DELETE_RECEIVE,
    CHANNEL_CONNECT_SEND,
    CHANNEL_CONNECT_RECEIVE,
    CHANNEL_CREATE_SEND,
    CHANNEL_ADD,
    CHANNEL_REMOVE,
    CHANNEL_EDIT,
    CHANNELS_REMOVE,
} from "./types";

const payloadCreator = (data) => normalize(data, schemas.channel);
const event = event => () => ({ event });
const meta = (event = null, toast = null, errorType = "channel") => () => ({ event, toast, errorType })

export const createChannelRequest = createAction(CHANNEL_CREATE_REQUEST);
export const createChannelSuccess = createAction(CHANNEL_CREATE_SUCCESS, payloadCreator,
    meta("channelCreate", {
        message: "Channel created successfully!",
        duration: 3000,
        status: "success"
    })
);
export const createChannelFailure = createAction(CHANNEL_CREATE_FAILURE, null, 
    meta(null, { 
        message: "Oops! There was a problem creating the channel",
        duration: 3000,
        status: "error"
    })    
);

export const updateChannelRequest = createAction(CHANNEL_UPDATE_REQUEST);
export const updateChannelSuccess = createAction(CHANNEL_UPDATE_SUCCESS, payloadCreator);
export const updateChannelFailure = createAction(CHANNEL_UPDATE_FAILURE, null, 
    meta(null, { 
        message: "Oops! There was a problem updating the channel",
        duration: 3000,
        status: "error"
    })    
);    


export const deleteChannelRequest = createAction(CHANNEL_DELETE_REQUEST, _id => ({ _id }));
export const deleteChannelSuccess = createAction(CHANNEL_DELETE_SUCCESS, _id => payloadCreator({ _id }));
export const deleteChannelFailure = createAction(CHANNEL_DELETE_FAILURE, null);
export const deleteChannel = createAction(CHANNEL_DELETE_FAILURE);

export const selectChannel = createAction(CHANNEL_SELECT);
export const sendChannelConnect = createAction(CHANNEL_CONNECT_SEND);
export const receiveChannelConnect = createAction(CHANNEL_CONNECT_RECEIVE, payloadCreator);

export const sendChannelCreate = createAction(CHANNEL_CREATE_SEND);
export const receiveChannelCreate = createAction(CHANNEL_CREATE_RECEIVE, payloadCreator);
export const receiveChannelDelete = createAction(CHANNEL_DELETE_RECEIVE, payloadCreator);
export const receiveChannelUpdate = createAction(CHANNEL_UPDATE_RECEIVE, payloadCreator);

export const addChannel = createAction(CHANNEL_ADD);
export const removeChannel = createAction(CHANNEL_REMOVE);
export const editChannel = createAction(CHANNEL_EDIT);

export const removeChannels = createAction(CHANNELS_REMOVE);