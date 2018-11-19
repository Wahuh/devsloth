import { USER_LOAD_INITIAL_DATA_SUCCESS } from "../components/user/duck/types";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
    const { type, payload } = action;

    if (type === USER_LOAD_INITIAL_DATA_SUCCESS) {
        console.log("ORIGINAL", state);
        console.log({
            ...state,
            ...payload
        });
        return {
            ...state,
            ...payload
        };
    }

    return appReducer(state, action);
}


export default rootReducer;