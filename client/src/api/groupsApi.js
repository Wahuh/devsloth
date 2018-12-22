import http from "./httpApi";
import { GROUPS_ENDPOINT } from "./endpoints";

export function createGroup(group) {
    return http.post(GROUPS_ENDPOINT, {
        name: group.name
    });
}

export function updateGroup(group) {
    return http.put(`${GROUPS_ENDPOINT}/${group._id}`, {
        name: group.name
    });
}

export function deleteGroup({ _id }) {
    return http.delete(`${GROUPS_ENDPOINT}/${_id}`);
}

export default {
    createGroup,
    deleteGroup,
    updateGroup
}