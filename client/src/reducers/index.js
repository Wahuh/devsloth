import { combineReducers } from "redux";
import uiReducer from "./uiReducer"
import { display } from "../features/display/duck/reducers";
import { channels } from "../features/chat/duck/reducers";
import { groups } from "../features/group/duck/reducers";
import entityReducer from "./entityReducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    entities: entityReducer,
    display,
    groups
});

export default rootReducer;

//   ui: uiReducer,