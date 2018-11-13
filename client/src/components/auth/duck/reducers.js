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

export const showAuthentication = (state = true, action) => {
    switch(action.type) {
        case types.SHOW_AUTHENTICATION:
            return true;

        case types.HIDE_AUTHENTICATION:
            return false;

        default:
            return state;
    }
}

export const showRegistrationLoading = (state = false, action) => {
    switch(action.type) {
        case types.SHOW_REGISTRATION_LOADING:
            return true;
        default:
            return state;
    }
}

const initialState = {
    user: "",
    isPending: false,
    isAuthenticated: false,
};

export const auth = (state = initialState, action) => {
    switch(action.type) {
        case types.USER_LOGIN:
        
        default:
            return state;
    }
}