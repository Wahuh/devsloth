import { schema } from "normalizr";
import { idAttribute } from "./constants";
import groupSchema from "./groupSchema";

const userSchema = new schema.Entity(
    "users", 
    { groups: [groupSchema] }, 
    { idAttribute: idAttribute }
);

export default userSchema;