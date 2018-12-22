import { APP_ERROR_CLEAR } from "../components/app/duck/types";

const errorsReducer = (state = {}, action) => {
    const { type, payload, error, meta } = action;
    if (error && meta.errorType) {
        console.log("ERRORS_REDUCER", {
            ...state,
            [meta.errorType]: payload.response ? payload.response.data : payload.message 
        });
        return { ...state, [meta.errorType]: payload.response ? payload.response.data : payload.message };
    } else if (type === APP_ERROR_CLEAR) {
        return { ...state, [payload]: ""};
}

    return state;
};

export default errorsReducer;