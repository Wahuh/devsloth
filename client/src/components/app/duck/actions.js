import { createAction } from "redux-actions";
import * as types from "./types";

export const loadAppDataSuccess = createAction(types.APP_DATA_LOAD_SUCCESS);

export const clearAppError = createAction(types.APP_ERROR_RESET);
