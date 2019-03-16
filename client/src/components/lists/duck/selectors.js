import { createSelector } from "reselect";
import { getSelectedChannel } from "../../channel/duck/selectors";



export const getList = (state, props) => state.lists.byId[props.listId];
    export const getListName = createSelector(getList, list => list.name);
export const getListIds = createSelector(
    getSelectedChannel,
    ({ lists }) => lists ? lists : null
);

export const getTasksById = state => state.tasks.byId;

export const getListTaskIds = (state, props) => {
    const list = state.lists.byId[props.listId];
    return list.hasOwnProperty("tasks") ? list.tasks : null;
}   

export const getListHead = createSelector(
    [ getTasksById, getListTaskIds ],
    (byId, taskIds) => {
        if (taskIds) {
            const head = taskIds.find(id => byId[id].isHead == true)
            return head ? head : null;
        }
        return null;
    }
)

export const makeGetListTaskNames = () => (
    createSelector(
        [getListTaskIds, getTasksById],
        (taskIds, byId) => taskIds.map(id => byId[id])
    )
);

export const getListTasksOrdered = (state, props) => props.taskIds.map(id => state.tasks.byId[id]);

export const makeGetListTaskNamesOrdered = () => {
    return createSelector(
        getListTasksOrdered,
        tasks => tasks.map(({ name }) => name)
    );
}

export const makeGetListTaskIdsOrdered = () => {
    return createSelector(
        [ getTasksById, getListHead ],
        (byId, head) => {
            if (head) {
                let taskIds = [];
                let current = head;
                while(current !== null) {
                    const task = byId[current];
                    taskIds.push(current);
                    console.log(current);
                    current = task.next;

                }
                return taskIds;
            } 
            return null;
        }
    );
}

export const getSelectedChannelLists = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) {
        return state.lists.allIds
        .map(id => state.lists.byId[id])
        .filter(({ channel }) => channel === channelId)
    }
    return null;
}

export const getLastTaskId = (state, listId) => {
    if (state.lists.byId[listId].tasks) {
        return state.lists.byId[listId].tasks
        .find(taskId => !state.tasks.byId[taskId].next)
    }
    return null;
}