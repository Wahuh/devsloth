import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { 
    jwtAuthRequest,
    jwtAuthSuccess,
    jwtAuthFailure,
    loginAuthSuccess,
    registrationAuthSuccess,
    logoutAuthSuccess
 } from "./actions";

 export const isFetching = handleActions(
    {
        [jwtAuthRequest]: () => true,
        [jwtAuthSuccess]: () => false,
        [jwtAuthFailure]: () => false, 
    }, true
);

export const isRejected = handleActions(
    {
        [jwtAuthFailure]: () => true
    }, false
)

export const isAuthenticated = handleActions(
    {
        [jwtAuthSuccess]: () => true,
        [loginAuthSuccess]: () => true,
        [registrationAuthSuccess]: () => true, 
        [logoutAuthSuccess]: () => false
    }, false
)

export default combineReducers({
    isFetching,
    isRejected,
    isAuthenticated
})