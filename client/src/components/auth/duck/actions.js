import { createAction } from "redux-actions";
import * as types from "./types";

const metaCreator = () => ({ errorType: "auth" });

export const registrationAuthRequest = createAction(types.AUTH_REGISTRATION_REQUEST);
export const registrationAuthSuccess = createAction(types.AUTH_REGISTRATION_SUCCESS);
export const registrationAuthFailure = createAction(types.AUTH_REGISTRATION_FAILURE, null, metaCreator);

export const loginAuthRequest = createAction(types.AUTH_LOGIN_REQUEST);
export const loginAuthSuccess = createAction(types.AUTH_LOGIN_SUCCESS);
export const loginAuthFailure = createAction(types.AUTH_LOGIN_FAILURE, null, metaCreator);

export const jwtAuthRequest = createAction(types.AUTH_JWT_REQUEST);
export const jwtAuthSuccess = createAction(types.AUTH_JWT_SUCCESS);
export const jwtAuthFailure = createAction(types.AUTH_JWT_FAILURE, null, metaCreator);