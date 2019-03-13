import { normalize, schema } from "normalizr";

const data = {
    "groups": [
        {
            "users": [
                "5beda6633984553ea8557771"
            ],
            "channels": [
                {
                    "users": [],
                    "tasks": [
                        {
                            "users": [],
                            "_id": "5bedad97b07b1b3c0cb6b867",
                            "name": "A new awesome task",
                            "channel": "5beda9b079930a359023dd2f",
                            "__v": 0
                        }
                    ],
                    "_id": "5beda9b079930a359023dd2f",
                    "name": "general",
                    "group": "5beda9b079930a359023dd2e",
                    "__v": 1
                },

                {
                    "users": [],
                    "tasks": [
                        {
                            "users": [],
                            "_id": "5bedad97b07b1b3c0cb6b868",
                            "name": "A new awesome task",
                            "channel": "5beda9b079930a359023dd2v",
                            "__v": 0
                        }
                    ],
                    "_id": "5beda9b079930a359023dd2v",
                    "name": "general",
                    "group": "5beda9b079930a359023dd21",
                    "__v": 1
                },
            ],
            "_id": "5beda9b079930a359023dd2e",
            "name": "A new awesome group",
            "__v": 0
        }
    ],
    "_id": "5beda6633984553ea8557771",
    "email": "tmdoan98@gmail.com",
    "__v": 2
}

const idAttribute = "_id";

const taskSchema = new schema.Entity("tasks", {}, {
    idAttribute: idAttribute,
});

const groupRefSchema = new schema.Entity(
    "groups",
    {},
    { idAttribute: idAttribute }
);




const memberSchema = new schema.Entity(
    "users",
    {},
    { idAttribute: idAttribute }
);


const groupsSchema = new schema.Entity(
    "groups", 
    { 
        channels: [channelSchema],
        users: [memberSchema], 
    }, 
    { idAttribute: idAttribute }
);



const userSchema = new schema.Entity(
    "users", 
    { groups: [groupsSchema] }, 
    { idAttribute: idAttribute }
);

const gdata = {
    "users": [
        {
            "groups": [
                "5beda769eb4c403e9c2cef6e",
                "5beda9b079930a359023dd2e",
                "5bf4734485e03a35d80d3ed4",
                "5bf4756b4e8e72446cfe385c",
                "5bf53b7aafb055401c704642",
                "5bf53bc9afb055401c704646",
                "5bf937318e9b6a1d403cc15a",
                "5bfae28a92be0f26241f378d",
                "5bfb2afd77d7d920d079736e",
                "5bfb2d0be39b2017d4c3b92f",
                "5bfb2d57bdcbbf320093212f",
                "5bfeba151ea4321a2408c48e"
            ],
            "_id": "5beda6633984553ea8557771",
            "__v": 11
        }
    ],
    "channels": [
        {
            "users": [],
            "tasks": [],
            "_id": "5bfeba151ea4321a2408c48f",
            "name": "general"
        }
    ],
    "_id": "5bfeba151ea4321a2408c48e",
    "name": "Global45310303",
    "__v": 0
}


const channelSchema = new schema.Entity(
    "channels", 
    { 
        tasks: [taskSchema],
        group: groupRefSchema
    }, 
    {idAttribute: idAttribute}
);



const groupSchema = new schema.Entity(
    "groups", 
    { 
        channels: [channelSchema],
        users: [memberSchema], 
    }, 
    { idAttribute: idAttribute }
);

  

export function normalise(data, schemaName) {
    const schemas = {
        user: userSchema,
        group: groupSchema,
        task: taskSchema,
        channel: channelSchema,
    };

    const normalizrData = normalize(data, schemas[schemaName]);
    let normalised = {}
    Object.entries(normalizrData.entities).forEach(
        ([key, value]) => normalised[key] = {byId: value, allIds: Object.keys(value), currentId: null} 
    );
    return normalised;
}

const ndata= { users: [],
    tasks: [],
    _id: "5bfc668ee728712b1410386d",
    name: 'Another new group',
    group: { 
        users: [ "5beda6633984553ea8557771", "5bf944346199a2533075030d" ],
        channels: [ "5bf937318e9b6a1d403cc15b",
          "5bfc64f3e728712b1410386b",
          "5bfc6673e728712b1410386c",
          "5bfc668ee728712b1410386d" ],
       _id: "5bf937318e9b6a1d403cc15a",
       name: 'Global',
       __v: 4 },
    __v: 0 }

export default normalise;