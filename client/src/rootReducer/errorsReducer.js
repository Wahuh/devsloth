const errorsReducer = (state = {}, action) => {
    const { type, payload, error, meta } = action;
    if (error && meta.errorType) {
        console.log("ERRORS_REDUCER", {
            ...state,
            [meta.errorType]: payload.message
        });
        return { ...state, [meta.errorType]: error.message };
    }

    return state;
};

export default errorsReducer;