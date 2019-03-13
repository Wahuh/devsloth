import { 
    byId, 
    allIds, 
    select,
    queuedInvite
 } from "./reducers";

import { 
    createGroupSuccess,
    deleteGroupSuccess,
    updateGroupSuccess,
    joinGroupSuccess,
    leaveGroupSuccess,
    joinGroupQueuedInvite,
    selectGroup
} from "./actions";
import { loadUserData } from "../../user/duck/actions";

import { loadUserAction } from "../../../tests/actions/user";

import { 
    createGroupData,
    deleteGroupData,
    updateGroupData,
    joinGroupData,
    queuedInviteData,
    leaveGroupData
} from "../../../tests/data/group";
import { userData } from "../../../tests/data/user";
import { 
    createGroupAction,
    updateGroupAction,
    deleteGroupAction,
    joinGroupAction,
    queuedInviteAction,
    leaveGroupAction
 } from "../../../tests/actions/group";

describe("Group Reducers", () => {
    describe("byId (Group)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        });

        it("handles creating a group", () => {
            expect(byId({}, createGroupSuccess(createGroupData)))
            .toEqual(createGroupAction.payload.entities.groups);
        });

        it("handles joining a group", () => {
            expect(
                byId({}, joinGroupSuccess(joinGroupData))
            ).toEqual(joinGroupAction.payload.entities.groups);
        });

        it("handles leaving a group", () => {
            expect(
                byId(
                    leaveGroupAction.payload.entities.groups, 
                    leaveGroupSuccess(leaveGroupData))
            ).toEqual({})
        });

        it("handles deleting a group", () => {
            expect(
                byId(
                    createGroupAction.payload.entities.groups, 
                    deleteGroupSuccess(deleteGroupData))
            ).toEqual({})
        });

        it("handles updating a group", () => {
            const groupId = updateGroupAction.payload.result;
            expect(
                byId(createGroupAction.payload.entities.groups, 
                    updateGroupSuccess(updateGroupData))
            ).toEqual({ 
                ...updateGroupAction.payload.entities.groups,
                [groupId]: { 
                    ...createGroupAction.payload.entities.groups[groupId],
                    name: updateGroupAction.payload.entities.groups[groupId].name
                }
            })
        });

        it("handles loading a user's groups", () => {
            expect(
                byId({}, loadUserData(userData))
            ).toEqual(loadUserAction.payload.entities.groups)
        });
    });

    describe("allIds (Group)", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles creating a group", () => {
            expect(allIds([], createGroupSuccess(createGroupData)))
            .toEqual(Object.keys(createGroupAction.payload.entities.groups));
        });

        it("handles joining a group", () => {
            expect(allIds([], joinGroupSuccess(joinGroupData)))
            .toEqual(Object.keys(joinGroupAction.payload.entities.groups));
        });

        it("handles leaving a group", () => {
            expect(allIds([], leaveGroupSuccess(leaveGroupData)))
            .toEqual(Object.keys(leaveGroupData.payload.entities.groups));
        });

        it("handles deleting a group", () => {
            expect(
                allIds(Object.keys(createGroupAction.payload.entities.groups), 
                deleteGroupSuccess(deleteGroupData))
            ).toEqual([])
        });

        it("handles loading a user's groups", () => {
            expect(allIds([], loadUserData(userData))
            ).toEqual(Object.keys(loadUserAction.payload.entities.groups))
        });
    });

    describe("select (Group)", () => {
        const initialState = { currentId: null, previousIds: [] }
        it("should return the initial state", () => {
            expect(select(undefined, {})).toEqual(initialState);
        });

        it("handles selecting a group", () => {
            expect(
                select(initialState, selectGroup("5c14ed35e270b13708661a0f"))
            ).toEqual({ currentId:"5c14ed35e270b13708661a0f", previousIds: [] })
        });

        it("handles changing to the previous group if the current group is deleted", () => {
            expect(
                select({ currentId: deleteGroupAction.payload.result, previousIds: ["anotherId", "previousId"] }, deleteGroupSuccess(deleteGroupData))
            ).toEqual({ currentId: "previousId", previousIds: ["anotherId"] });
        });

        it("returns currentId as null if the current group is deleted and there are no previous groups", () => {
            expect(
                select({ currentId: deleteGroupAction.payload.result, previousIds: [] }, deleteGroupSuccess(deleteGroupData))
            ).toEqual({ currentId: null, previousIds: [] });   
        });

        it("handles selecting a newly created group", () => {
            expect(
                select({
                    currentId: "anyId",
                    previousIds: []
                }, createGroupSuccess(createGroupData))
            ).toEqual({ 
                currentId: createGroupAction.payload.result, 
                previousIds: ["anyId"] 
            });
        });

        it("handles selecting a newly joined group", () => {
            expect(
                select({
                    currentId: "anyId",
                    previousIds: []
                }, joinGroupSuccess(joinGroupData))
            ).toEqual({ 
                currentId: joinGroupAction.payload.result, 
                previousIds: ["anyId"] 
            });
        });

        it("handles loading a user's groups", () => {
            expect(
                select(initialState, loadUserData(userData))
            ).toEqual({ currentId: Object.keys(loadUserAction.payload.entities.groups)[0], previousIds: [] })
        });

        it("removes deleted groups from previousIds", () => {
            expect(
                select(
                    { currentId: "anyId", previousIds: [deleteGroupAction.payload.result, "anotherId"] },
                    deleteGroupSuccess(deleteGroupData)
                )
            ).toEqual({ currentId: "anyId", previousIds: ["anotherId"] })
        });
    });

    describe("queuedInvite (Group)", () => {
        it("should return the initial state", () => {
            expect(queuedInvite(undefined, {})).toEqual(null);
        });

        it("handles storing a group invite to be joined later", () => {
            expect(queuedInvite(null, joinGroupQueuedInvite(queuedInviteData)))
            .toEqual(queuedInviteAction.payload);
        });
    });
});
