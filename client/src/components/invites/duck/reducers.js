import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { addInvite } from "./actions";

export const allIds = handleActions(
    {
        [addInvite]: (state, { payload }) => addInviteIds(state, payload),
    }, []
);

export const pendingIds = handleActions(
    {
        [addInvite]: (state, { payload }) => addInviteIds(state, payload),
    }, []
)

const addInviteIds = (state, inviteId) => {
    return [ ...state, inviteId ];
}

export default combineReducers({
    allIds,
    pendingIds
});