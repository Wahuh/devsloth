import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";
import { MEMBER_JOIN, MEMBER_GROUP_JOIN_RECEIVE, MEMBER_GROUP_LEAVE_RECEIVE, MEMBER_CHANNEL_JOIN_RECEIVE, MEMBER_CHANNEL_LEAVE_RECEIVE, MEMBER_NEW_RECEIVE } from "./types";

const payloadCreator = (data) => normalize(data, schemas.member);

export const memberJoin = createAction(MEMBER_JOIN, payloadCreator);
export const receiveMemberGroupJoin = createAction(MEMBER_GROUP_JOIN_RECEIVE, payloadCreator);
export const receiveMemberGroupLeave = createAction(MEMBER_GROUP_LEAVE_RECEIVE, payloadCreator);
export const receiveMemberChannelJoin = createAction(MEMBER_CHANNEL_JOIN_RECEIVE, payloadCreator);
export const receiveMemberChannelLeave = createAction(MEMBER_CHANNEL_LEAVE_RECEIVE, payloadCreator);

export const receiveNewMember = createAction(MEMBER_NEW_RECEIVE);