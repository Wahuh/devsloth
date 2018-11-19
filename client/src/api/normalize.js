import { normalize, schema } from "normalizr";

//const data = {
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

const task = new schema.Entity("tasks", {}, {
    idAttribute: idAttribute,
});

const channel = new schema.Entity(
    "channels", 
    {tasks: [task]}, 
    {idAttribute: idAttribute}
);

const group = new schema.Entity(
    "groups", 
    { channels: [channel] }, 
    { idAttribute: idAttribute }
);

const user = new schema.Entity(
    "users", 
    { groups: [group] }, 
    { idAttribute: idAttribute }
);

export function normalizeInitialState(data) {
    const normalizedData = normalize(data, user);
    let newResult = {}
    Object.entries(normalizedData.entities).forEach(
        ([key, value]) => newResult[key] = Object.keys(value)
    );
    return {
        ...normalizedData,
        result: newResult
    };
}