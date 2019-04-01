
export const getTask = (state, props) => state.tasks.byId[props.taskId];
export const getPreviousTask = (state, props) => {
    const tasks = Object.values(state.tasks.byId);
    return tasks.find(task => task.next === props.taskId);
}
export const getHeadTask = (state, props) => {
    const tasks = Object.values(state.tasks.byId);
    return tasks.find(task => task.next === props);
}

export const getSelectedTaskName = state => {
    const taskId = getSelectedTaskId(state);
    if (taskId) return state.tasks.byId[taskId].name;
    return null;
};
export const getSelectedTaskId = state => state.tasks.selectedId;
export const getSelectedTask = ({ tasks }) => tasks.selectedId ? tasks.byId[tasks.selectedId] : null; 
