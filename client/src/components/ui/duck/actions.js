import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";

import * as types from "./types"

export const createUiToast = createAction(types.UI_TOAST_CREATE);
export const addUiToast = createAction(types.UI_TOAST_ADD, 
    toast => normalize(toast, schemas.toast) 
);
export const removeUiToast = createAction(types.UI_TOAST_REMOVE, 
    _id => normalize({ _id }, schemas.toast) 
);

export const addUiFetching = createAction(types.UI_FETCHING_ADD);
export const removeUiFetching = createAction(types.UI_FETCHING_REMOVE);
export const toggleSideMenu = createAction(types.UI_SIDE_MENU_TOGGLE);
export const addUiDropdown = createAction(types.UI_DROPDOWN_ADD);
export const removeUiDropdown = createAction(types.UI_DROPDOWN_REMOVE);

export const addUiPortal = createAction(types.UI_PORTAL_ADD);
export const removeUiPortal = createAction(types.UI_PORTAL_REMOVE);
export const removeUiPortalEscape = createAction(types.UI_PORTAL_REMOVE_ESCAPE);