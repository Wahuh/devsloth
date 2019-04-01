export const getModal = state => state.ui.modal;

export const getIsModalMounted = (state, modal) => {
    if (state.ui.modals.hasOwnProperty(modal)) {
        return state.ui.modals[modal]
    }
    return null;
}

export const getAllToasts = state => {
    if (state.ui.toasts) {
        return state.ui.toasts.allIds.map(id => state.ui.toasts.byId[id]);
    }
    return [];
}

export const getAllDropdowns = state => state.ui.dropdowns;

export const getIsFetching = (state, key) => state.ui.isFetching.hasOwnProperty(key) ? state.ui.isFetching[key] : null;
export const getIsSideMenuVisible = state => state.ui.isSideMenuVisible
export const getPortals = state => state.ui.portals;