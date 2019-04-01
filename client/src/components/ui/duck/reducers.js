import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { addUiToast, removeUiToast, addUiFetching, removeUiFetching, toggleSideMenu, addUiDropdown, removeUiDropdown, addUiPortal, removeUiPortal, removeUiPortalEscape } from "./actions";
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

const dropdowns = handleActions(
    {
        [addUiDropdown]: (state, { payload }) => addDropdown(state, payload),
        [removeUiDropdown]: (state, { payload }) => removeDropdown(state, payload),
    }, []
);

const isFetching = handleActions(
    {
        [addUiFetching]: (state, { payload }) => addFetching(state, payload),
        [removeUiFetching]: (state, { payload }) => removeFetching(state, payload),
    }, []
);

const isSideMenuVisible = handleActions(
    {
        [toggleSideMenu]: (state, { payload }) => payload
    }, false    
);

const portals = handleActions(
    {
        [addUiPortal]: (state, { payload }) => addPortal(state, payload),
        [removeUiPortal]: (state, { payload }) => removePortal(state, payload),
        [removeUiPortalEscape]: (state, { payload }) => removeTopPortal(state, payload),
    }, []
);

const addPortal = (state, payload) => {
    return [ ...state, payload ];
}

const removePortal = (state, payload) => {
    console.log("pay",state.filter(({ portalType }) => portalType !== payload))
    return state.filter(({ portalType }) => portalType !== payload);
}

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

const addDropdown = (state, dropdown) => [ ...state, dropdown ]
const removeDropdown = (state, dropdownId) => state.filter(({ id }) => id !== dropdownId) 

const removeModal = (state, modal) => {
    return state.filter(id => id !== modal);
}

const removeTopPortal = state => {
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
    dropdowns,
    isFetching,
    isSideMenuVisible,
    portals
});


export default uiReducer;