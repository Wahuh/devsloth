import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { register } from "./components/auth/duck/sagas";


//node-uuid




//store.subscribe(() => {
//    saveLocalState(store.getState());
//    todos: store.getState().todos
//});


const configureStore = () => {
    const persistedState = {}; //loadLocalState
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        persistedState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(register);
    
    console.log(store.getState());
    return store;
}

export default configureStore;