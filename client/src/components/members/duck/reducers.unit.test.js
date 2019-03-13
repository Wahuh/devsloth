import { byId, allIds } from "./reducers";

import { loadUserData } from "../../user/duck/actions";
import { userData } from "../../../tests/data/user";
import { loadUserAction } from "../../../tests/actions/user";

import {
    createGroupSuccess,
    deleteGroupSuccess,
    joinGroupSuccess
} from "../../group/duck/actions";
import { 
    createGroupData,
    deleteGroupData,
    joinGroupData,
} from "../../../tests/data/group";
import { 
    createGroupAction,
    deleteGroupAction,
    joinGroupAction
} from "../../../tests/actions/group";

describe("Member Reducer", () => {
    describe("byId (Member)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        });

        it("handles a group being created", () => {
            expect(
                byId({}, createGroupSuccess(createGroupData))
            ).toEqual(createGroupAction.payload.entities.members);
        });

        it("handles a group being joined", () => {
            expect(
                byId({}, joinGroupSuccess(joinGroupData))
            ).toEqual(joinGroupAction.payload.entities.members);
        });


        it("handles a group being deleted", () => {
            const initialState = createGroupAction.payload.entities.members
            expect(
                byId(initialState, deleteGroupSuccess(deleteGroupData))
            ).toEqual({});
        });

        it("handles loading a user's members", () => {
            expect(
                byId({}, loadUserData(userData))
            ).toEqual(loadUserAction.payload.entities.members)
        });
    });

    describe("allIds (Member)", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles a group being created", () => {
            expect(
                allIds([], createGroupSuccess(createGroupData))
            ).toEqual(Object.keys(createGroupAction.payload.entities.members))
        });

        it("handles a group being joined", () => {
            expect(
                allIds([], joinGroupSuccess(joinGroupData))
            ).toEqual(Object.keys(joinGroupAction.payload.entities.members))
        });

        it("handles a group being deleted", () => {
            const initialState = Object.keys(createGroupAction.payload.entities.members);
            expect(
                allIds(initialState, deleteGroupSuccess(deleteGroupData))
            ).toEqual([]);
        });

        it("handles loading a user's members", () => {
            expect(
                allIds([], loadUserData(userData))
            ).toEqual(Object.keys(loadUserAction.payload.entities.members))
        });
    });
});