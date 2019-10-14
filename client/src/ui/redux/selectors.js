export const getIsModalOpen = (state, modalName) =>
  state.ui.modals.includes(modalName);
