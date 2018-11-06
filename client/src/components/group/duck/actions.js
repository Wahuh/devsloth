import * as types from "./types"

export const createGroup = (groupName) => ({
    //generate a unique ID for group
    type: types.CREATE_GROUP,
    payload: {
        name: groupName,
    }
});

export const joinGroup = (group) => ({
    type: types.JOIN_GROUP,
});

export const leaveGroup = (group) => ({
    type: types.LEAVE_GROUP,
});

export const hideGroupModal = () => ({
    type: types.HIDE_GROUP_MODAL,
});

export const showGroupModal = () => ({
    type: types.SHOW_GROUP_MODAL,
});

export const changeScreen = (screen) => ({
    type: types.CHANGE_GROUP_MODAL_SCREEN,
    payload: {
        screen: screen
    }
});