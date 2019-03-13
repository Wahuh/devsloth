import http from "./httpApi";
import { TASKS_ENDPOINT, LISTS_ENDPOINT } from "./endpoints";

export const createTask = task => http.post(`${LISTS_ENDPOINT}/${task.list}/tasks`, task);
export const updateTask = task => http.put(`${TASKS_ENDPOINT}/${task._id}`, task);
export const deleteTask = task => http.delete(`${TASKS_ENDPOINT}/${task._id}`)

export default {
    createTask,
    deleteTask,
    updateTask,

}