import {
    createGroupSuccess,
    updateGroupSuccess,
    deleteGroupSuccess
} from "./actions";

import { 
    createGroupAction,
    deleteGroupAction,
    updateGroupAction
} from "../../../tests/actions/group";
import { 
    createGroupData,
    deleteGroupData,
    updateGroupData
} from "../../../tests/data/group";

describe("Group Actions", () => {
    describe("createGroupSuccess", () => {
        it("returns the normalized created group", () => {
            expect(createGroupSuccess(createGroupData))
            .toEqual(createGroupAction);
        });
    });

    describe("updateGroupSuccess", () => {
        it("returns the normalized updated group", () => {
            expect(updateGroupSuccess(updateGroupData))
            .toEqual(updateGroupAction)
        });
    });

    describe("deleteGroupSuccess", () => {
        it("returns the normalized deleted group", () => {
            expect(deleteGroupSuccess(deleteGroupData))
            .toEqual(deleteGroupAction);
        });
    });
});
