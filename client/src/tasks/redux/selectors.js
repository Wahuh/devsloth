/* eslint-disable */
export const selectTasksByListId = (state, list_id) => {
  const taskIds = state.tasks.allIds;
  const tasks = taskIds
    .reduce((acc, task_id) => {
      const task = state.tasks.byId[task_id];
      if (task.list_id === +list_id) {
        acc.push(task);
      }
      return acc;
    }, [])
    .sort((a, b) => a.position - b.position);
  return tasks;
};

export const selectTasksCountByListId = (state, list_id) => {
  const taskIds = state.tasks.allIds;
  return taskIds.filter(id => state.tasks.byId[id].list_id === list_id).length;
};
/* eslint-enable */
