import { normalize, schema } from "normalizr";

const idAttribute = "_id";

const taskSchema = new schema.Entity("tasks", {}, { idAttribute });

const groupRefSchema = new schema.Entity(
    "groups", 
    { 

    }, 
    { idAttribute }
)

const channelMemberSchema = new schema.Entity(
    "members",
    {},
    { idAttribute }
);

const channelSchema = new schema.Entity(
    "channels", 
    { 
        tasks: [taskSchema],
        members: [channelMemberSchema]
    }, 
    { idAttribute }
);


const memberSchema = new schema.Entity(
    "members",
    {},
    { idAttribute }
);

const messageSchema = new schema.Entity(
    "messages",
    {},
    { idAttribute }
);

const groupSchema = new schema.Entity(
    "groups", 
    { 
        channels: [channelSchema],
        members: [memberSchema], 
    }, 
    { idAttribute }
);

const appSchema = new schema.Entity(
    "user", 
    { 
        groups: [groupSchema] 
    }, 
    { idAttribute }
);

export function normalizeAppData(data) {
    const normalizrData = normalize(data, appSchema);
    let normalised = {}
    Object.entries(normalizrData.entities).forEach(
        ([key, value]) => {
            normalised[key] = {byId: value, allIds: Object.keys(value), currentId: null} 
        }
    );
    return normalised;
}

export default {
    group: groupSchema,
    message: messageSchema,
    channel: channelSchema
}