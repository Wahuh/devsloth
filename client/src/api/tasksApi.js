import http from "./httpApi";
import { TASKS_ENDPOINT } from "./endpoints";

export const create = (task) => (
    http.post(TASKS_ENDPOINT, task)
);

export default {
    create
}