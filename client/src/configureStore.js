import { createStore } from "redux";
import rootReducer from "./reducers";
import { saveLocalState } from "./services/loadLocalState";



//node-uuid




//store.subscribe(() => {
//    saveLocalState(store.getState());
//    todos: store.getState().todos
//});

const configureStore = () => {
    const persistedState = {}; //loadLocalState

    const store = createStore(
        rootReducer, 
        persistedState
    );
    
    console.log(store.getState());
    return store;
}

export default configureStore;