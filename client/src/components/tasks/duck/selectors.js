
export const getTask = (state, taskId) => state.tasks.byId[taskId];

export const getSelectedTaskId = state => state.tasks.selectedId;
export const getSelectedTask = ({ tasks }) => tasks.selectedId ? tasks.byId[tasks.selectedId] : null; 
