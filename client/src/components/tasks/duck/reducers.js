import * as types from "./types";

export const tasksEntity = (state = {}, { type, payload }) => {
    switch(type) {
        case types.TASK_CREATE_SUCCESS:
            return {
                ...state,
                [payload.id]: payload,
            };

        default:
            return state;
    }
};

export const tasksResult = (state = [], { type, payload }) => {
    switch(type) {
        case types.TASK_CREATE_SUCCESS:
            console.log([
                ...state,
                payload.id
            ])
            return [
                ...state,
                payload.id,
            ];

        default:
            return state;
    }
};