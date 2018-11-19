import { schema } from "normalizr";
import { idAttribute } from "./constants";
import taskSchema from "./taskSchema";

const channelSchema = new schema.Entity(
    "channels", 
    {tasks: [taskSchema]}, 
    {idAttribute: idAttribute}
);

export default channelSchema;