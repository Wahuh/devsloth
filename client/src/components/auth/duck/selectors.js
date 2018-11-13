const getUsers = (state) => state.users;
const getAuthenticatedUserId = (state) => state.auth.user;
const getAuthenticatedUser = (state) => getUsers(state)[getAuthenticatedUserId(state)];