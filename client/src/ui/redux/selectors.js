export const getIsModalOpen = (state, modalName) =>
  state.ui.modals.includes(modalName);

export const getIsFetching = (state, requestName) =>
  state.ui.fetching[requestName];
