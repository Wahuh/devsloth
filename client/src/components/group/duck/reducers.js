import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import {
    selectGroup,
    joinGroupQueuedInvite,
    addGroup,
    editGroup,
    removeGroup,
} from "./actions";
import { loadUserData } from "../../user/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state, { payload }) => addGroups(state, payload),
        [addGroup]: (state, { payload }) => addGroups(state, payload),
        [removeGroup]: (state, { payload }) => deleteGroup(state, payload),
        [editGroup]: (state, { payload }) => updateGroup(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => addGroupIds(state, payload),
        [addGroup]: (state, { payload }) => addGroupIds(state, payload),
        [removeGroup]: (state, { payload }) => removeGroupId(state, payload),
    }, []
);

export const selectedId = handleActions(
    {   
        [addGroup]: (state, { payload }) => updateSelectedId(state, payload),
        [selectGroup]: (state, { payload }) => updateSelectedId(state, payload),
        [removeGroup]: (state, { payload }) => deleteSelectedId(state, payload),
    }, null
);

export const queuedInvite = handleActions(
    {
        [joinGroupQueuedInvite]: (state, { payload }) => payload
    }, null
);

const updateSelectedId = (state, { result: groupId }) => {
    return groupId;
}

const deleteSelectedId = (state, { result: groupId }) => {
    return groupId === state ? null : state;
}

const addGroups = (state, { entities }) => {
    const { groups } = entities;
    return { ...state, ...groups };
}

const addGroupIds = (state, { entities }) => {
    const { groups } = entities;
    if (groups) return [ ...state, ...Object.keys(groups) ];
    return state;
}

const deleteGroup = (state, { result: groupId }) => {
    const { [groupId]: removedGroup, ...rest } = state;
    return rest;
}

const removeGroupId = (state, { result: groupId }) => {
    return state.filter(id => id !== groupId);
}

const updateGroup = (state, { entities, result: id }) => {
    const { groups } = entities;
    const updatedGroup = groups[id];
    const group = { ...state[id] };
    group.name = updatedGroup.name;    
    return { ...state, [id]: group };
}


export default combineReducers({
    byId,
    allIds,
    selectedId,
    queuedInvite
});
