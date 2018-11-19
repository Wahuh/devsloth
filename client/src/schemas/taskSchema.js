import { schema } from "normalizr";
import { idAttribute } from "./constants";

const taskSchema = new schema.Entity("tasks", {}, {
    idAttribute: idAttribute,
});

export default taskSchema;
