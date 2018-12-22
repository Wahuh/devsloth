import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { showUiModal, hideUiModal } from "./actions";
import { view } from "../../view/duck/reducers";
import { isLoading } from "../../app/duck/uiReducers";
import { auth } from "../../auth/duck/uiReducers";
import tasks from "../../tasks/duck/uiReducers";

const modal = handleActions(
    {
        [showUiModal]: (state, { payload }) => payload,
        [hideUiModal]: (state, { payload }) => null,
    }, null
);

const uiReducer = combineReducers({
    isLoading,
    view,
    tasks,
    auth,
    modal
});


export default uiReducer;