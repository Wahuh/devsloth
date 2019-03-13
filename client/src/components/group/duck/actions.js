import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";
import {
    createGroupData,
    deleteGroupData,
    updateGroupData,
    joinGroupData,
    queuedInviteData
} from "../../../tests/data/group";

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

    GROUP_JOIN_REQUEST,
    GROUP_JOIN_SUCCESS,
    GROUP_JOIN_FAILURE,
    GROUP_JOIN_INVITE_QUEUED,

    GROUP_LEAVE_REQUEST,
    GROUP_LEAVE_SUCCESS,
    GROUP_LEAVE_FAILURE,

    GROUP_SELECT,
    GROUP_CREATE_NOTIFICATION,
    GROUP_JOIN_NOTIFICATION,
    GROUP_INVITE_COPY,
    GROUP_DELETE_RECEIVE,
    GROUP_UPDATE_RECEIVE,
    GROUP_CONNECT_SEND,
    GROUP_CONNECT_RECEIVE,
    GROUP_GLOBAL_JOIN_REQUEST,
    GROUP_DELETE,
    GROUP_ADD,
    GROUP_REMOVE,
    GROUP_UPDATE,
    GROUP_EDIT,

} from "./types";

const payloadCreator = data => normalize(data, schemas.group);
const event = event => () => ({ event });
const metaCreator = () => ({ errorType: "group" });
const meta = (event = null, toast = null, errorType = "group") => () => ({ event, toast, errorType })

export const createGroupRequest = createAction(GROUP_CREATE_REQUEST);
export const createGroupSuccess = createAction(GROUP_CREATE_SUCCESS, payloadCreator);
export const createGroupFailure = createAction(GROUP_CREATE_FAILURE);
export const sendGroupConnect = createAction(GROUP_CONNECT_SEND, payloadCreator);
export const receiveGroupConnect = createAction(GROUP_CONNECT_RECEIVE);

export const updateGroupRequest = createAction(GROUP_UPDATE_REQUEST);
export const updateGroupSuccess = createAction(GROUP_UPDATE_SUCCESS, payloadCreator);
export const updateGroupFailure = createAction(GROUP_UPDATE_FAILURE, null, metaCreator);

export const deleteGroupRequest = createAction(GROUP_DELETE_REQUEST, _id => ({ _id }));
export const deleteGroupSuccess = createAction(GROUP_DELETE_SUCCESS, _id => payloadCreator({ _id }));
export const deleteGroupFailure = createAction(GROUP_DELETE_FAILURE, null, metaCreator);

export const deleteGroup = createAction(GROUP_DELETE);

export const joinGroupRequest = createAction(GROUP_JOIN_REQUEST, inviteId => ({ inviteId }));
export const joinGlobalGroupRequest = createAction(GROUP_GLOBAL_JOIN_REQUEST);
export const joinGroupSuccess = createAction(GROUP_JOIN_SUCCESS, payloadCreator);
export const joinGroupFailure = createAction(GROUP_JOIN_FAILURE, null, metaCreator);
export const joinGroupQueuedInvite = createAction(GROUP_JOIN_INVITE_QUEUED);
export const joinGroupNotification = createAction(GROUP_JOIN_NOTIFICATION, null, event("groupJoin"));

export const leaveGroupRequest = createAction(GROUP_LEAVE_REQUEST);
export const leaveGroupSuccess = createAction(GROUP_LEAVE_SUCCESS, payloadCreator);
export const leaveGroupFailure = createAction(GROUP_LEAVE_FAILURE, null, metaCreator);

export const receiveGroupDelete = createAction(GROUP_DELETE_RECEIVE, payloadCreator);
export const receiveGroupUpdate = createAction(GROUP_UPDATE_RECEIVE);

export const addGroup = createAction(GROUP_ADD);
export const removeGroup = createAction(GROUP_REMOVE);
export const editGroup = createAction(GROUP_EDIT);

export const copyGroupInvite = createAction(GROUP_INVITE_COPY, null, 
    () => ({ 
        toast: { 
            message: "Link copied to clipboard!",
            duration: 3000,
            status: "success",
        }
    })
);
export const selectGroup = createAction(GROUP_SELECT, _id => payloadCreator({ _id }));

// console.log("CREATE", createGroupSuccess(createGroupData));
// console.log("UPDATE", updateGroupSuccess(updateGroupData));
// console.log("DELETE", deleteGroupSuccess(deleteGroupData));
// console.log("JOIN", joinGroupSuccess(joinGroupData));
// console.log("JOIN QUEUE", joinGroupQueuedInvite(queuedInviteData));