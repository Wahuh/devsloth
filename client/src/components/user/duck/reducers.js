import * as types from "./types";

const initialState = {
    isLoggedIn: false,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };

        default:
            return state;
    }
}