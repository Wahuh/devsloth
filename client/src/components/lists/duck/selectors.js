import { createSelector, createSelectorCreator, defaultMemoize } from "reselect";
import { getSelectedChannel, getSelectedChannelId } from "../../channel/duck/selectors";

export const getList = (state, props) => {
    return state.lists.byId[props.listId];
}

export const getListTaskCount = (state, props) => {
    const list = state.lists.byId[props.listId];
    return list ? list.tasks.length : [0];
}


export const getChannelLists = (state, props) => {
    const { lists } = state.channels.byId[props.channelId];
    if (lists) {
        return lists.map(id => state.lists.byId[id]);
    }
    return [];
}

export const getListName = createSelector(getList, list => list.name);

export const getChannelListIds = state => {
    const channel = getSelectedChannel(state);
    return channel ? channel.lists || null : null;
}

export const getTasksById = state => state.tasks.byId;

export const getListTaskIds = (state, props) => {
    const list = state.lists.byId[props.listId];
    return list ? list.tasks : null;
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


const createCachedArraySelector = () => {
    let cachedArray = [];
    return (state, props) => {
        const taskIds = getListTaskIds(state, props);
        if (taskIds && taskIds.length !== 0) {
            //if order different?
            // if (taskIds.length !== cachedArray.length) {
                let result = [];
                const byId = state.tasks.byId;
                let current = taskIds.find(id => byId[id].isHead == true);
                while(current !== null) {
                    const task = byId[current];
                    result.push(current);
                    current = task.next;
                }
                cachedArray = result;
                return result;
            // }
            // let areArraysEqual = true;
            // console.log(taskIds, cachedArray);
            // for(let i = taskIds.length; i--;) {
            //     if(taskIds[i] !== cachedArray[i]) {
            //         areArraysEqual = false;
            //         break;
            //     }
            // }
            // console.log("areEqual?", areArraysEqual);
            // return areArraysEqual ? cachedArray : taskIds;
        } 
        return null;
    }
}

export const makeGetListTaskIdsOrdered = () => {
    return createCachedArraySelector();
}

const createCachedTaskNamesSelector = () => {
    let cachedNames = [];
    return (state, props) => {
        const byId = state.tasks.byId;
        const taskNames = props.taskIds.map(id => byId[id].name)
        if (taskNames.length !== cachedNames.length) {
            return taskNames;
        }
        let areArraysEqual = true;
        for(let i = taskNames.length; i--;) {
            if(taskNames[i] !== cachedNames[i]) {
                areArraysEqual = false;
                break;
            }
        }
        if (!areArraysEqual) console.log("not", taskNames);
        return areArraysEqual ? cachedNames : taskNames;
    }
}

export const makeGetListTaskNamesOrdered = () => {
    return createCachedTaskNamesSelector();
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

export const getLastTaskId = createSelector(
    [ getTasksById, getListTaskIds ],
    (byId, taskIds) => taskIds ? taskIds.find(id => !byId[id].next) : null
)
