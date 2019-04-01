import SagaTester from "redux-saga-tester"
import tasks from "../duck/reducers";
import lists from "../../lists/duck/reducers";
import { watchTaskMoveRequest } from "../duck/sagas/taskMoveSagas";
import { moveTaskRequest } from "../duck/actions";
import { TASK_MOVE_SUCCESS, TASKS_REORDER } from "../duck/types";

const initialState = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id2",
            },
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6"]
            }
        },
        allIds: []
    }
}


const expectedState = {
    tasks: {
        byId: {
            //list 1
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                name: "test3",
                channel: "channel1",
                _id: "id3",
                next: null,
                list: "list1",
                isHead: null
            },
    
            //list2
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test1",
                next: "id4",
            },
    
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                name: "test6",
                next: null,
                list: "list2",
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id2", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id1"]
            }
        },
        allIds: []
    }
}

const expectedState2 = {
    tasks: {
        byId: {
            //list 1
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                name: "test3",
                channel: "channel1",
                _id: "id3",
                next: null,
                list: "list1",
                isHead: null
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: "id1",
            },

            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test1",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id2", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id1"]
            }
        },
        allIds: []
    }
}

const expectedState3 = {
    tasks: {
        byId: {
            //list 1
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                name: "test3",
                channel: "channel1",
                _id: "id3",
                next: null,
                list: "list1",
                isHead: null
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id1",
            },

            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test1",
                next: "id6",
            },

            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: null
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id2", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id1"]
            }
        },
        allIds: []
    }
}

const expectedState4 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id2",
            },
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test2",
                next: null,
            },
    
            //list2
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test3",
                next: "id4",
            },
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                name: "test6",
                next: null,
                list: "list2",
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id3"]
            }
        },
        allIds: []
    }
}

const expectedState5 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id2",
            },
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test2",
                next: null,
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: "id3",
            },

            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test3",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id3"]
            }
        },
        allIds: []
    }
}

const expectedState6 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id2",
            },
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test2",
                next: null,
            },

            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id3",
            },

            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: "id5",
                list: "list2",
            },

            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id3"]
            }
        },
        allIds: []
    }
}

const expectedState7 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id3",
            },

            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
    
            //list2
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test2",
                next: "id4",
            },

            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id2",]
            }
        },
        allIds: []
    }
}

const expectedState8 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id5",
            },
            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: "id2",
            },

            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test2",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id2"]
            }
        },
        allIds: []
    }
}

const expectedState9 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
    
            //list2
            "id4": {
                _id: "id4",
                channel: "channel1",
                isHead: true,
                list: "list2",
                name: "test4",
                next: "id2",
            },

            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test2",
                next: "id5",
            },

            "id5": {
                _id: "id5",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test5",
                next: "id6",
            },
            "id6": {
                _id: "id6",
                channel: "channel1",
                isHead: null,
                list: "list2",
                name: "test6",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id3"]
            },
            list2: {
                _id: "list2",
                tasks: ["id4", "id5", "id6", "id2"]
            }
        },
        allIds: []
    }
}

const initialState2 = {
    tasks: {
        byId: {
            //list 1
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test1",
                next: "id2",
            },
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2", "id3"]
            },
        },
        allIds: []
    }
}

const expectedState10 = {
    tasks: {
        byId: {
            //list 1
            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test2",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: "id1",
                list: "list1",
            },
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test1",
                next: null,
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2", "id3"]
            },
        },
        allIds: []
    }
}

const expectedState11 = {
    tasks: {
        byId: {
            //list 1

            "id2": {
                _id: "id2",
                channel: "channel1",
                isHead: true,
                list: "list1",
                name: "test2",
                next: "id1",
            },
            "id1": {
                _id: "id1",
                channel: "channel1",
                isHead: null,
                list: "list1",
                name: "test1",
                next: "id3",
            },
            "id3": {
                _id: "id3",
                channel: "channel1",
                isHead: null,
                name: "test3",
                next: null,
                list: "list1",
            },
        },
        selectedId: null
    },
    lists: {
        byId: {
            list1: {
                _id: "list1",
                tasks: ["id1", "id2", "id3"]
            },
        },
        allIds: []
    }
}

describe("Task Move Sagas", () => {
    describe("watchTaskMoveRequest", () => {
        it("moves first task (old list) to first task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id1",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 0,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 0,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState);
        });

        it("moves first task (old list) to last task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id1",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 0,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 3,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState2);
        });

        it("moves first task (old list) to between first and last task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id1",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 0,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 2,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState3);
        });

        it("moves last task (old list) to first task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id3",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 2,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 0,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState4);
        });

        it("moves last task (old list) to last task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id3",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 2,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 3,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState5);
        });

        it("moves last task (old list) to between first and last task (new list same channel)", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id3",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 2,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 1,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState6);
        });

        it("[old list -> new list, same channel] moves between first and last task -> first task", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id2",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 1,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 0,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState7);
        });

        it("[old list -> new list, same channel] moves between first and last task -> last task", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id2",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 1,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 3,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState8);
        });

        it("[old list -> new list, same channel] moves between first and last task -> between first and last task", () => {
            const sagaTester = new SagaTester({
                initialState: initialState,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id2",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 1,
                newListId: "list2",
                newChannelId: "channel1",
                newIndex: 1,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState9);
        });

        it("[same list] moves from first task -> last task", () => {
            const sagaTester = new SagaTester({
                initialState: initialState2,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState2);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id1",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 0,
                newListId: "list1",
                newChannelId: "channel1",
                newIndex: 3,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState10);
        });

        it("[same list] moves from first task -> between first and last task", () => {
            const sagaTester = new SagaTester({
                initialState: initialState2,
                reducers: { tasks, lists }
            });
            sagaTester.start(watchTaskMoveRequest);
            expect(sagaTester.getState())
            .toEqual(initialState2);

            sagaTester.dispatch(moveTaskRequest({
                taskId: "id1",
                oldListId: "list1",
                oldChannelId: "channel1",
                oldIndex: 0,
                newListId: "list1",
                newChannelId: "channel1",
                newIndex: 2,
            }));

            sagaTester.waitFor(TASKS_REORDER);

            expect(sagaTester.getState()).toEqual(expectedState11);
        });
    });
})