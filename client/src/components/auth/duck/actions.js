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