import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { addUiToast, removeUiToast, addUiModal, removeUiModal, removeUiModalEscape, addUiFetching, removeUiFetching } from "./actions";
import { auth } from "../../auth/duck/uiReducers";


const toastById = handleActions(
    {
        [addUiToast]: (state, { payload }) => addToast(state, payload),
        [removeUiToast]: (state, { payload }) => removeToast(state, payload),
    }, {}
);

const allToastIds = handleActions(
    {   
        [addUiToast]: (state, { payload }) => addToastIds(state, payload),
        [removeUiToast]: (state, { payload }) => removeToastId(state, payload),
    }, []
);

const modals = handleActions(
    {
        [addUiModal]: (state, { payload }) => addModal(state, payload),
        [removeUiModal]: (state, { payload }) => removeModal(state, payload),
        [removeUiModalEscape]: (state, { payload }) => removeTopModal(state, payload),
    }, []
);

const isFetching = handleActions(
    {
        [addUiFetching]: (state, { payload }) => addFetching(state, payload),
        [removeUiFetching]: (state, { payload }) => removeFetching(state, payload),
    }, []
);

const addFetching = (state, key) => {
    return { ...state, [key]: true };
}

const removeFetching = (state, key) => {
    return { ...state, [key]: false };
}

const toasts = combineReducers({
    byId: toastById,
    allIds: allToastIds
});

const addModal = (state, modal) => {
    return [ ...state, modal ];
}

const removeModal = (state, modal) => {
    return state.filter(id => id !== modal);
}

const removeTopModal = state => {
    return state.slice(0, -1);
}

const addToast = (state, { entities }) => {
    const { toasts } = entities;
    return { ...state, ...toasts };
}

const addToastIds = (state, { entities }) => {
    const { toasts } = entities;
    if (toasts) return [ ...state, ...Object.keys(toasts) ];
    return state;
}

const removeToast = (state, { result: toastId }) => {
    const { [toastId]: removedToast, ...rest } = state;
    return rest;
}

const removeToastId = (state, { result: toastId }) => {
    return state.filter(id => id !== toastId);
}

const uiReducer = combineReducers({
    auth,
    toasts,
    modals,
    isFetching
});


export default uiReducer;