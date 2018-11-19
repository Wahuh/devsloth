import { schema } from "normalizr";
import { idAttribute } from "./constants";
import channelSchema from "./channelSchema";

const groupSchema = new schema.Entity(
    "groups", 
    { channels: [channelSchema] }, 
    { idAttribute: idAttribute }
);

export default groupSchema;

