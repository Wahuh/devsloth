export const getIsFetching = state => state.ui.auth.isFetching;
export const getAuthError = state => state.errors.auth;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRejected = state => state.auth.IsRejected;
export const getUsername = state => {
    return state.auth.username;
}

export const getId = state => state.auth._id;