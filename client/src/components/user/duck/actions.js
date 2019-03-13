import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas"

import { USER_DATA_LOAD, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE, USER_LOAD } from "./types";

const payloadCreator = data => normalize(data, schemas.user);

export const loadUserData = createAction(USER_DATA_LOAD, payloadCreator);

export const loadUser = createAction(USER_LOAD, payloadCreator);

export const updateUserRequest = createAction(USER_UPDATE_REQUEST);
export const updateUserSuccess = createAction(USER_UPDATE_SUCCESS, payloadCreator);
export const updateUserFailure = createAction(USER_UPDATE_FAILURE);