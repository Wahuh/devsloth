import http from "./httpApi";
import { GROUPS_ENDPOINT } from "./endpoints";

export const createGroup = ({ name }) => http.post(GROUPS_ENDPOINT, { name });

export const updateGroup = ({ _id, name }) => http.put(`${GROUPS_ENDPOINT}/${_id}`, { name });

export const deleteGroup = ({ _id }) => http.delete(`${GROUPS_ENDPOINT}/${_id}`);

export const joinGroup = ({ inviteId }) => http.post(`${GROUPS_ENDPOINT}/join/${inviteId}`);

export const joinGlobalGroup = () => http.post(`${GROUPS_ENDPOINT}/join/global`);

export const leaveGroup = ({ groupId, memberId }) => {
    return http.delete(`${GROUPS_ENDPOINT}/${groupId}/members/${memberId}`);
}
export default {
    createGroup,
    deleteGroup,
    updateGroup,
    joinGroup,
    leaveGroup
}