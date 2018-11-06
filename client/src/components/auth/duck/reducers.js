import * as types from "./types";

export const loginModal = (state = {show: true}, action) => {
    switch(action.type) {
        case types.HIDE_LOGIN_MODAL:
            return {
                show: false,
            };

        case types.SHOW_LOGIN_MODAL:
            return {
                show: true,
            };

        default:
            return state;
    }
}