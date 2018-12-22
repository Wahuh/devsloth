import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import {
    createGroupSuccess,
    deleteGroupSuccess,
    updateGroupSuccess,
    selectGroup,
} from "./actions";

import { 
    mergeObject, 
    mergeArray, 
    removeFromArray, 
    removeFromObject 
} from "../../../utils";

export const byId = handleActions(
    {
        [createGroupSuccess]: (state, { payload }) => addGroup(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroup(state, payload),
        [updateGroupSuccess]: (state, { payload }) => updateGroup(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [createGroupSuccess]: (state, { payload }) => addGroupId(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroupId(state, payload),
    }, []
);

export const currentId = handleActions(
    {
        [selectGroup]: (state, { payload }) => updateCurrentId(state, payload),
        [createGroupSuccess]: (state, { payload }) => payload.result,
        [deleteGroupSuccess]: (state, { payload }) => { 
            console.log("pp", payload)
            return payload._id === state ? null : state
        }
    }, null
);


const addGroup = (state, { entities }) => {
    const { groups } = entities;
    return mergeObject(state, groups);
}

const addGroupId = (state, { result }) => {
    return mergeArray(state, result);
}

const removeGroup = (state, { _id }) => {
    return removeFromObject(state, _id);
}

const removeGroupId = (state, { _id }) => {
    return removeFromArray(state, _id);
}

const updateGroup = (state, { groups }) => {

    // allids = ["1"] byId={"1": {id: 1}}
    // const { byId, allIds } = groups;
    // const group = { byId[allIds[0]] }
    return mergeObject(state, {})
}

const updateCurrentId = (state, { _id }) => {

    return _id;
}

export default combineReducers({
    byId,
    allIds,
    currentId
});

    //     case types.GROUP_UPDATE_SUCCESS:
    //     const group = payload;
    //     return { 
    //         ...state, 
    //         [group._id]: { ...state[group._id], ...group }
    //     };

    // case types.GROUP_DELETE_SUCCESS:
    //     const groupId = payload;    
    //     let { [groupId]: deletedItem, ...rest } = state;
    //     return rest;