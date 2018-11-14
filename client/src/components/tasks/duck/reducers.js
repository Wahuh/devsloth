import * as types from "./types";

const initialState = {
    byId: {
        1: {id: 1, name: "hello"},
        2: {id: 2, name: "hello"},
        3: {id: 3, name: "Website Redesign"},
        4: {id: 4, name: "Ship iOS app"},
        5: {id: 5, name: "Analytics Data"},
        6: {id: 6, name: "Increase conversion rate by 20% by Q3"},
        7: {id: 7, name: "develop engineering blog"},
    },
    allIds: [1, 2, 3, 4, 5, 6, 7]
};

const tasks = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case types.TASK_ADD_REQUEST:
        case types.TASK_ADD_SUCCESS:
            const { id } = payload
            return {
                ...state,
            };

        case types.TASK_ADD_FAILURE:
        default:
            return state;
    }
}

export default tasks;