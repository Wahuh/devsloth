

const errorsReducer = (state = {}, action) => {
    const { type, payload, error, meta } = action;
    if (error && meta.errorType) {
        return { ...state, [meta.errorType]: payload.response ? payload.response.data : payload.message };
    }
    return state;
};

export default errorsReducer;