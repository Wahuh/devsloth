import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";

import * as types from "./types"

export const addUiModal = createAction(types.UI_MODAL_ADD);
export const removeUiModal = createAction(types.UI_MODAL_REMOVE);
export const removeUiModalEscape = createAction(types.UI_MODAL_REMOVE_ESCAPE);

export const createUiToast = createAction(types.UI_TOAST_CREATE);
export const addUiToast = createAction(types.UI_TOAST_ADD, 
    toast => normalize(toast, schemas.toast) 
);
export const removeUiToast = createAction(types.UI_TOAST_REMOVE, 
    _id => normalize({ _id }, schemas.toast) 
);

export const addUiFetching = createAction(types.UI_FETCHING_ADD);
export const removeUiFetching = createAction(types.UI_FETCHING_REMOVE);