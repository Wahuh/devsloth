import { APP_DATA_LOAD_SUCCESS } from "../components/app/duck/types";
import appReducer from "./appReducer";

const rootReducer = (state, action) => {
    const { type, payload } = action;

    if (type === APP_DATA_LOAD_SUCCESS) {
        console.log("ORIGINAL", state);
        const auth = { ...state.auth, ...payload.auth };
        console.log({
            ...state,
            ...payload
        });
        return {
            ...state,
            ...payload,
            auth
        };
    }
    return appReducer(state, action);
}


export default rootReducer;