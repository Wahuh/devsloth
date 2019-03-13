import { normalize, schema } from "normalizr";

const idAttribute = "_id";

const taskSchema = new schema.Entity("tasks", {}, { idAttribute });
const localTaskSchema = new schema.Entity("tasks", {}, { idAttribute: "localId" });

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

const listSchema = new schema.Entity(
    "lists",
    {
        tasks: [taskSchema]
    },
    { idAttribute }
);

const channelSchema = new schema.Entity(
    "channels", 
    { 
        lists: [listSchema],
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

const userSchema = new schema.Entity(
    "user",
    {
        groups: [groupSchema]
    },
    { idAttribute }
);

const toastSchema = new schema.Entity(
    "toasts", {}, { idAttribute }
);

const inviteSchema = new schema.Entity(
    "invites", {}, { idAttribute }
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
    user: userSchema,
    group: groupSchema,
    message: messageSchema,
    channel: channelSchema,
    member: memberSchema,
    task: taskSchema,
    list: listSchema,
    localTask: localTaskSchema,
    toast: toastSchema,
    invite: inviteSchema
}