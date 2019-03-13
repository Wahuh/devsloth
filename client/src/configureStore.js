import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import authApi from "./api/authApi";

const preloadedState = {
    auth: { isFetching: authApi.getJwt() ? true : false }
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
        preloadedState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;