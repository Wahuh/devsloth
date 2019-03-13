
export const getAuthError = state => state.errors.auth;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRejected = state => state.auth.isRejected;
export const getIsLoading = state =>  state.auth.isLoading;
export const getUsername = state => {
    return state.auth.username;
}

export const getIsAuthenticated = state => state.auth.isAuthenticated

export const getId = state => state.auth._id;

export const getIsAuthFetching = state => state.auth.isFetching;