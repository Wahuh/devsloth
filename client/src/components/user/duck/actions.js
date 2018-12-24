import { createAction } from "redux-actions";
import { normalize, schema } from "normalizr";
import schemas from "../../../schemas"

import { USER_DATA_LOAD_SUCCESS } from "./types";

const payloadCreator = data => normalize(data, schemas.user);

export const loadUserDataSuccess = createAction(USER_DATA_LOAD_SUCCESS, payloadCreator);
