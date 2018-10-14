import * as types from "./types"

export const createGroup = (group) => {
    return {
        type: types.CREATE_GROUP,
    }
}

export const joinGroup = (group) => {
    return {
        type: types.JOIN_GROUP,
    }
}

export const leaveGroup = (group) => {
    return {
        type: types.LEAVE_GROUP,
    }
}

export const hideGroupModal = () => {
    return {
        type: types.HIDE_GROUP_MODAL,
    }
}

export const showGroupModal = () => {
    return {
        type: types.SHOW_GROUP_MODAL,
    }
}
