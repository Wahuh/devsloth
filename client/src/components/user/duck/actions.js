import { createAction } from "redux-actions";
import * as types from "./types";

const metaCreator = () => ({ errorType: "user" });

export const loadInitialUserDataRequest = createAction(types.USER_LOAD_INITIAL_DATA_REQUEST);
export const loadInitialUserDataSuccess = createAction(types.USER_LOAD_INITIAL_DATA_SUCCESS);
export const loadInitialUserDataFailure = createAction(types.USER_LOAD_INITIAL_DATA_FAILURE, null, metaCreator);
