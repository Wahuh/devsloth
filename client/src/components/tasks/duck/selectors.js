export const getAllTasks = state => state.result.tasks.map(id => state.entities.tasks[id]);

export const getTaskModal = state => state.ui.tasks.showModal;
