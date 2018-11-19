export const getAllGroups = state => state.result.groups.map(id => state.entities.groups[id]);

export const getGroupModal = state => state.ui.groupModal.show;
export const getGroupModalScreens = state => state.ui.groupModal.screens;
export const getCurrentGroupDefault = state => state.result.groups[0];