import { normalize, schema } from "normalizr";

const idAttribute = "_id";

const taskSchema = new schema.Entity("tasks", {}, { idAttribute });
const taskMoveSchema = new schema.Entity("tasks", [ taskSchema ]);
const tasksSchema = [ taskSchema ];
const localTaskSchema = new schema.Entity("tasks", {}, { idAttribute: "localId" });

// console.log(normalize([
//     {
//       "next": "5c8d4c925cb9d351045116b6",
//       "isHead": false,
//       "members": [],
//       "_id": "5c8d4c915cb9d351045116b5",
//       "list": "5c8d232fb7430722b49b1724",
//       "name": "sadsadasdBooas",
//       "channel": "5c8d2146b7430722b49b171e",
//       "__v": 0
//     },
//     {
//       "next": "5c8d4c915cb9d351045116b5",
//       "isHead": true,
//       "members": [],
//       "_id": "5c8d4c905cb9d351045116b4",
//       "list": "5c8d232fb7430722b49b1724",
//       "name": "asdasdpasdas",
//       "channel": "5c8d2146b7430722b49b171e",
//       "__v": 0
//     },
//     {
//       "next": "5c8d4c935cb9d351045116b7",
//       "isHead": false,
//       "members": [],
//       "_id": "5c8d4c925cb9d351045116b6",
//       "list": "5c8d232fb7430722b49b1724",
//       "name": "asdasdsadas",
//       "channel": "5c8d2146b7430722b49b171e",
//       "__v": 0
//     }
//   ], tasksSchema), "tas2")
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

const messageSchema = new schema.Entity(
    "messages",
    {},
    { idAttribute }
);


const channelSchema = new schema.Entity(
    "channels", 
    { 
        lists: [listSchema],
        members: [channelMemberSchema],
        messages: [messageSchema]
    }, 
    { idAttribute }
);


const memberSchema = new schema.Entity(
    "members",
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
        groups: [groupSchema],
    }, 
    { idAttribute }
);

const userSchema = new schema.Entity(
    "user",
    {
        groups: [groupSchema],
        lists: [listSchema]
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
    tasks: tasksSchema,
    taskMove: taskMoveSchema,
    list: listSchema,
    localTask: localTaskSchema,
    toast: toastSchema,
    invite: inviteSchema
}