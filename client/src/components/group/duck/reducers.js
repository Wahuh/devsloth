import * as types from "./types";


export const groupsEntity = (state = null, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export const groupsResult = (state = null, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export const currentGroup = (state = "", { type, payload }) => {
    switch(type) {
        case types.CURRENT_GROUP_LOAD_DEFAULT:
            console.log(payload);
            return payload;

        default:
            return state;
    }
};
