export const selectIsModalOpen = (state, modalName) =>
  state.ui.modals.includes(modalName);

export const selectIsFetching = (state, requestName) =>
  state.ui.fetching[requestName] || false;
