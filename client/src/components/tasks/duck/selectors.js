export const getTasks = state => state.tasks.allIds.map(id => state.tasks.byId[id]);

export const getTaskModal = state => state.ui.tasks.showModal;
