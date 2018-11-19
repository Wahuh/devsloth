import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


//node-uuid

const initialState = {
    entities: {
        channels: {},
        groups: {},
        tasks: {},
        users: {}
    },
    result: {
        channels: [],
        groups: [],
        tasks: [],
        users: []
    }
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
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    console.log(store.getState());
    return store;
}

export default configureStore;