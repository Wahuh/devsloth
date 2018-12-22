import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const testState = {
    auth: {
        email: "tmd@gmail.com",
        _id: "2",
        alias: "tmd"
    },
    channels: {
        byId: {
            "5bf937318e9b6a1d403cc15b": {
                group: "5bf937318e9b6a1d403cc15a",
                name: "general",
                tasks: [],
                users: [],
                _id: "5bf937318e9b6a1d403cc15b",
            },
            "5bfc64f3e728712b1410386b": {
                group: "5bf937318e9b6a1d403cc15a",
                name: "Thanh's New group",
                tasks: [],
                users: [],
                _id: "5bfc64f3e728712b1410386b"
            }
        },
        allIds: ["5bf937318e9b6a1d403cc15b", "5bfc64f3e728712b1410386b"],
        currentId: "5bf937318e9b6a1d403cc15b"
    },
    groups: {
        byId: {
            "5bf937318e9b6a1d403cc15a": {
                channels: ["5bf937318e9b6a1d403cc15b", "5bfc64f3e728712b1410386b"],
                members: ["2"],
                name: "Global",
                _id: "5bf937318e9b6a1d403cc15a"
            }
        },
        allIds: ["5bf937318e9b6a1d403cc15a"],
        currentId: "5bf937318e9b6a1d403cc15a"
    },
    tasks: {},
    members: {},
    messages: {}
}

//store.subscribe(() => {
//    saveLocalState(store.getState());
//    todos: store.getState().todos
//});


const configureStore = () => {
    //const persistedState = {}; //loadLocalState
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        testState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    console.log(store.getState());
    return store;
}

export default configureStore;