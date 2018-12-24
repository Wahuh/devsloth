import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import {
    createGroupSuccess,
    deleteGroupSuccess,
    updateGroupSuccess,
    selectGroup,
} from "./actions";

import { loadUserDataSuccess } from "../../user/duck/actions";

export const byId = handleActions(
    {
        [loadUserDataSuccess]: (state, { payload }) => addGroups(state, payload),
        [createGroupSuccess]: (state, { payload }) => addGroups(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroup(state, payload),
        [updateGroupSuccess]: (state, { payload }) => updateGroup(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserDataSuccess]: (state, { payload }) => addGroupIds(state, payload),
        [createGroupSuccess]: (state, { payload }) => addGroupIds(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroupId(state, payload),
    }, []
);

export const select = handleActions(
    {
        [loadUserDataSuccess]: (state, { payload }) => updateSelectFromUserData(state, payload),
        [createGroupSuccess]: (state, { payload }) => updateSelect(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeFromSelect(state, payload),
        [selectGroup]: (state, { payload }) => updateSelect(state, payload)
    }, { currentId: null, previousIds: [] }
);


const addGroups = (state, { entities }) => {
    const { groups } = entities;
    return { ...state, ...groups };
}

const addGroupIds = (state, { entities }) => {
    const { groups } = entities;
    return [ ...state, ...Object.keys(groups) ];
}

const removeGroup = (state, { result: groupId }) => {
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

const updateSelect = (state, { result: newId }) => {
    const { currentId, previousIds } = state;
    if (currentId) {
        return { currentId: newId, previousIds: [ ...previousIds, currentId ] };
    }
    return { currentId: newId, previousIds: [] };
}

const updateSelectFromUserData = (state, { entities }) => {
    const { groups } = entities;
    return { currentId: Object.keys(groups)[0], previousIds: [] }
}

const removeFromSelect = (state, { entities, result: deletedId }) => {
    const select = { ...state };
    const { currentId, previousIds } = select;

    if (currentId === deletedId) {
        if (previousIds.length == 0) {
            select.currentId = null;
            return select;
        }
        select.currentId = select.previousIds.pop();
        return select;
    } else if (previousIds.includes(deletedId)) {
        select.previousIds = previousIds.filter(id => id !== deletedId);
        return select;
    }
}

export default combineReducers({
    byId,
    allIds,
    select
});
