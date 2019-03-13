import SagaTester from 'redux-saga-tester';

import reducer from "../../../components/group/duck/reducers";
import {
    watchCreateGroupRequest,
    watchDeleteGroupRequest
} from "../../../components/group/duck/sagas";
import {
    createGroupRequest,
    createGroupSuccess
} from "../../../components/group/duck/actions";
import {
    GROUP_CREATE_REQUEST,
    GROUP_CREATE_SUCCESS
} from "../../../components/group/duck/types";
import {
    createGroupPayload
} from "../../payloads/group";

describe("creating a group", () => {
    let sagaTester = null;
    const initialState = {
        byId: {},
        allIds: [],
        currentId: null,
    };

    beforeEach(() => {
        sagaTester = new SagaTester({
            initialState,
            reducers: reducer
        });
        sagaTester.start(watchCreateGroupRequest);
    });

    it("waits for a create group request, calls the group api and dispatches a success action", async () => {
        expect(sagaTester.getState()).toEqual(initialState);
        sagaTester.dispatch(createGroupRequest(createGroupPayload));
        await sagaTester.waitFor(GROUP_CREATE_REQUEST);
        expect(sagaTester.getLatestCalledAction()).toEqual(
            
        );
    });
});

describe("deleting a group", () => {

});
