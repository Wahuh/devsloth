import { createAction } from "redux-actions";
import * as types from "./types"

export const showUiModal = createAction(types.UI_SHOW_MODAL);
export const hideUiModal = createAction(types.UI_HIDE_MODAL);