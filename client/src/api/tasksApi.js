import http from "./httpApi";
import { TASKS_ENDPOINT, LISTS_ENDPOINT, CURRENT_USER_ENDPOINT } from "./endpoints";

export const createTask = task => {
    if (task.channel) {
        return http.post(`${LISTS_ENDPOINT}/${task.list}/tasks`, task);
    } else {
        return http.post(`${CURRENT_USER_ENDPOINT}/lists/${task.list}/tasks`, task);
    }
}
export const updateTask = task => http.put(`${TASKS_ENDPOINT}/${task._id}`, task);
export const deleteTask = task => http.delete(`${TASKS_ENDPOINT}/${task._id}`)

export default {
    createTask,
    deleteTask,
    updateTask,
}