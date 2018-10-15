export const getAllGroups = (state) => {
    return state.entities.groups.allIds.map(id => state.entities.groups.byId[id]);
}
