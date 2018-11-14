import * as types from "./types";

export const userLogin = () => ({
    type: types.USER_LOGIN,
});

export const showLoginModal = () => ({
    type: types.SHOW_LOGIN_MODAL,
});

export const hideLoginModal = () => ({
    type: types.HIDE_LOGIN_MODAL,
});

export const createGuest = () => ({
    type: types.CREATE_GUEST,
});

export const createAccount = () => ({
    type: types.CREATE_ACCOUNT,
});

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data,
});

export const registrationPending = (user) => ({
    type: types.REGISTRATION_PENDING,
    payload: user,
});


export const registrationError = (error) => ({
    type: types.REGISTRATION_ERROR,
    payload: {
        error: error
    }
});

export const showAuthentication = () => ({
    type: types.SHOW_AUTHENTICATION,
});

export const hideAuthentication = () => ({
    type: types.HIDE_AUTHENTICATION,
});

export const startRegistrationLoading = () => ({
    type: types.START_REGISTRATION_LOADING,
});

export const stopRegistrationLoading = () => ({
    type: types.STOP_REGISTRATION_LOADING,
});