import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import {
    createChannelSuccess, receiveChannelCreate,
} from "../../channel/duck/actions";

import { loadUserData } from "../../user/duck/actions";
import { 
    createGroupSuccess,
    deleteGroupSuccess,
    joinGroupSuccess
} from "../../group/duck/actions";

import { receiveMemberGroupJoin } from "../duck/actions";
import { receiveMessageTypingStart, receiveMessageTypingStop } from "../../messages/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state, { payload }) => addMembers(state, payload),
        [createGroupSuccess]: (state, { payload }) => addMembers(state, payload),
        [receiveMemberGroupJoin]: (state, { payload }) => addMembers(state, payload),
        [receiveChannelCreate]: (state, { payload }) => updateMemberChannels(state, payload),
        [joinGroupSuccess]: (state, { payload }) => addMembers(state, payload),
        [createChannelSuccess]: (state, { payload }) => updateMemberChannels(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => addMemberIds(state, payload),
        [createGroupSuccess]: (state, { payload }) => addMemberIds(state, payload),
        [receiveMemberGroupJoin]: (state, { payload }) => addMemberIds(state, payload),
        [joinGroupSuccess]: (state, { payload }) => addMemberIds(state, payload),
    }, []
);

export const allTypingIds = handleActions(
    {
        [receiveMessageTypingStart]: (state, { payload }) => addMemberIds(state, payload),
        [receiveMessageTypingStop]: (state, { payload }) => removeMemberId(state, payload),
    }, []
);

const addMembers = (state, { entities }) => {
    const { members } = entities;
    return { ...state, ...members };
}

const addMemberIds = (state, { entities }) => {
    const { members } = entities;
    if (members) {
        const memberIds = Object.keys(members).filter(id => !state.includes(id));
        return [ ...state, ...memberIds ];
    } 
}

const removeMemberId = (state, { result: memberId }) => {
    return state.filter(id => id !== memberId);
}

const removeGroupMembers = (state, { entities, result: groupId }) => {
    const { members } = entities;
    const deletedMemberIds = Object.keys(members);
    return Object.keys(state)
    .filter(memberId => !deletedMemberIds.includes(memberId))
    .reduce((obj, key) => ({ ...obj, [key]: state[key] }), {});
}

const removeGroupMemberIds = (state, { entities, result: groupId }) => {
    const { members } = entities;
    const deletedMembers = Object.keys(members);
    return state.filter(id => !deletedMembers.includes(id));
}

const updateMemberChannels = (state, { entities }) => {
    const { members } = entities;
    return { ...state, ...members };
}

export default combineReducers({
    byId,
    allIds,
    allTypingIds
});