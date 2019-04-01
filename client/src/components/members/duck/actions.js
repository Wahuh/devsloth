import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";
import { MEMBER_JOIN, MEMBER_GROUP_JOIN_RECEIVE, MEMBER_GROUP_LEAVE_RECEIVE, MEMBER_CHANNEL_JOIN_RECEIVE, MEMBER_CHANNEL_LEAVE_RECEIVE, MEMBER_NEW_RECEIVE, MEMBER_TYPING_START, MEMBER_TYPING_STOP, MEMBER_TYPING_START_RECEIVE, MEMBER_TYPING_STOP_RECEIVE } from "./types";

const payloadCreator = (data) => normalize(data, schemas.member);

export const memberJoin = createAction(MEMBER_JOIN, payloadCreator);
export const receiveMemberGroupJoin = createAction(MEMBER_GROUP_JOIN_RECEIVE, payloadCreator);
export const receiveMemberGroupLeave = createAction(MEMBER_GROUP_LEAVE_RECEIVE, payloadCreator);
export const receiveMemberChannelJoin = createAction(MEMBER_CHANNEL_JOIN_RECEIVE, payloadCreator);
export const receiveMemberChannelLeave = createAction(MEMBER_CHANNEL_LEAVE_RECEIVE, payloadCreator);

export const receiveNewMember = createAction(MEMBER_NEW_RECEIVE);

export const memberStartTyping = createAction(MEMBER_TYPING_START);
export const memberStopTyping = createAction(MEMBER_TYPING_STOP);
export const receiveMemberStartTyping = createAction(MEMBER_TYPING_START_RECEIVE);
export const receiveMemberStopTyping = createAction(MEMBER_TYPING_STOP_RECEIVE);