export const getAllTasks = state => state.tasks.allIds.map(id => state.tasks.byId[id]);

export const getTaskModal = state => state.ui.tasks.showModal;
export const getListTasks = (state, listId) => {

    if (state.lists.byId[listId].tasks) {
        let head = state.lists.byId[listId].tasks
        .find(taskId => {
            const { isHead, list } = state.tasks.byId[taskId];
            return isHead && list === listId;
        });
    
        if (head) {
            let tasks = [];
            let current = head;
            while(current !== null) {
                const task = state.tasks.byId[current];
                tasks.push(task);
                current = task.next;
            } 
            return tasks;
        }
    }

    return null;
}

export const getTaskIdsList = (state, listId) => {
    return state.tasks.allIds
    .filter(id => state.tasks.byId[id].list === listId)
}

export const getTask = (state, taskId) => state.tasks.byId[taskId]

export const getSelectedTaskId = state => state.tasks.selectedId;
export const getSelectedTask = ({ tasks }) => tasks.selectedId ? tasks.byId[tasks.selectedId] : null; 
