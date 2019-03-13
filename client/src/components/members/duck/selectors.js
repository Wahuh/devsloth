import {  getSelectedChannelId } from "../../channel/duck/selectors";
import { getUserId } from "../../user/duck/selectors";
import { getOwnerId, getSelectedGroupId } from "../../group/duck/selectors";

export const getAllMembers = ({ members }) => members.allIds.map(id => members.byId[id]);

export const getMember = (state, id) => {
    return state.members.byId[id]
}

export const getMemberUser = (state, channelId) => {
    const userId = getUserId(state);
    if (channelId) {
        const member = getAllMembers(state)
        .find( ({ user, channels }) => user === userId && channels.includes(channelId) );
        return member;
    }
}

export const getMemberIdUser = (state) => {
    const channelId = getSelectedChannelId(state);
    const userId = getUserId(state);
    if (channelId) {
        const { _id } = getAllMembers(state)
        .find( ({ user, channels }) => user === userId && channels.includes(channelId) );
        return _id;
    }
};

export const getGroupMembersByAlias = state => {
    const groupId = getSelectedGroupId(state);
    if (groupId) {
        return getAllMembers(state)
        .filter(member => member.group === groupId)
        .sort( (a, b) => a.alias.localeCompare(b.alias) )
        .map( ({ _id }) => _id )
    }
    return null;
}

export const getGroupMembersCount = state => {
    const groupId = getSelectedGroupId(state);
    if (groupId) {
        return state.members.allIds.filter(id => state.members.byId[id].group === groupId).length;
    }
    return null;
}

export const getMemberIdsChannelCurrentSortedByAlias = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) {
        return getAllMembers(state)
            .filter(member => member.channels.includes(channelId))
            .sort( (a, b) => a.alias.localeCompare(b.alias) )
            .map( ({ _id }) => _id )
    }
    return [];
}

export const getMemberIsOwner = (state, memberId) => {
    const ownerId = getOwnerId(state);
    if (ownerId) {
        const { user } = state.members.byId[memberId];
        if (user) {
            return ownerId === user;
        }
    }
    return null;
}

export const getMemberIsUser = (state, memberId) => {
    const userId = getUserId(state);
    const { user } = state.members.byId[memberId];
    return userId === user;
}

export const getMemberAlias = (state, id) => {
    return state.members.byId[id].alias
} 

export const getAllTypingIds = state => {
    return state.members.allTypingIds;
}

export const getAllTypingAliases = (state) => {
    const typingIds = getAllTypingIds(state);
    if (typingIds) {
        return state.members.allTypingIds.map(
            id => state.members.byId[id].alias
        );
    }
    return null;
;}