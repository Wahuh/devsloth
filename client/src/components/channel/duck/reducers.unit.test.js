import { byId, allIds, currentIds } from "./reducers";
import { 
    createGroupSuccess, 
    deleteGroupSuccess,
    joinGroupSuccess
} from "../../group/duck/actions";
import {
    createChannelSuccess,
    deleteChannelSuccess,
    updateChannelSuccess,
    selectChannel
} from "./actions";

import { 
    createChannelData, 
    deleteChannelData,
    updateChannelData
} from "../../../tests/data/channel";

import {
    createGroupData,
    deleteGroupData,
    joinGroupData,
} from "../../../tests/data/group";

import {
    createGroupAction,
    deleteGroupAction,
    joinGroupAction,
} from "../../../tests/actions/group";

import { createChannelAction, deleteChannelAction, updateChannelAction } from "../../../tests/actions/channel";
import { loadUserData } from "../../user/duck/actions";
import { loadUserAction } from "../../../tests/actions/user";
import { userData } from "../../../tests/data/user";

describe("Channel Reducers", () => {
    describe("byId (channel)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        })

        it("handles creating a channel", () => {
            expect(
                byId({}, createChannelSuccess(createChannelData))
            )
            .toEqual(createChannelAction.payload.entities.channels);
        });

        it("handles deleting a channel", () => {
            expect(
                byId(
                    createChannelAction.payload.entities.channels, 
                    deleteChannelSuccess(deleteChannelData))
            ).toEqual({})
        });

        it("handles updating a channel", () => {
            const initialState = createChannelAction.payload.entities.channels;
            const channelId = updateChannelAction.payload.result;
            const newChannelName = updateChannelAction.payload.entities.channels[channelId].name
            expect(
                byId(initialState, updateChannelSuccess(updateChannelData))
            ).toEqual({
                ...initialState,
                [channelId]: {
                    ...createChannelAction.payload.entities.channels[channelId],
                    name: newChannelName
                }
            });
        });

        it("handles a group being created", () => {
            expect(
                byId({}, createGroupSuccess(createGroupData))
            ).toEqual(createGroupAction.payload.entities.channels)
        });

        
        it("handles a group being joined", () => {
            expect(
                byId({}, joinGroupSuccess(joinGroupData))
            ).toEqual(joinGroupAction.payload.entities.channels)
        });

        it("handles a group being deleted", () => {
            expect(
                byId(createGroupAction.payload.entities.channels,
                    deleteGroupSuccess(deleteGroupData))
            ).toEqual({})
        }); 

        it("handles loading a user's channels", () => {
            expect(
                byId({}, loadUserData(userData))
            ).toEqual(loadUserAction.payload.entities.channels)
        });
    });

    describe("allIds (channel)", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles creating a channel", () => {
            expect(
                allIds([], createChannelSuccess(createChannelData))
            ).toEqual(Object.keys(createChannelAction.payload.entities.channels))
        });

        it("handles deleting a channel", () => {
            expect(
                allIds(Object.keys(createChannelAction.payload.entities.channels), 
                deleteChannelSuccess(deleteChannelData))
            ).toEqual([])
        });

        it("handles a group being created", () => {
            expect(
                allIds([], createGroupSuccess(createGroupData))
            ).toEqual(Object.keys(createGroupAction.payload.entities.channels))
        });

        it("handles a group being joined", () => {
            expect(
                allIds([], joinGroupSuccess(joinGroupData))
            ).toEqual(Object.keys(joinGroupAction.payload.entities.channels))
        });

        it("handles a group being deleted", () => {
            expect(
                allIds(Object.keys(createGroupAction.payload.entities.channels), deleteGroupSuccess(deleteGroupData))
            ).toEqual([])
        });

        it("handles loading a user's channels", () => {
            expect(allIds([], loadUserData(userData))
            ).toEqual(Object.keys(loadUserAction.payload.entities.channels))
        });
    });

    describe("currentIds (channel)", () => {
        it("should return the initial state", () => {
            expect(currentIds(undefined, {})).toEqual({});
        });

        it("handles selecting a channel", () => {
            expect(
                currentIds({}, selectChannel({ group: "5c11330955e8631a10b56c94", _id: "5c156bfd5cd22e3ec0ef5f6e" }))
            ).toEqual({ "5c11330955e8631a10b56c94": ["5c156bfd5cd22e3ec0ef5f6e"] })
        });

        it("handles a channel being created", () => {
            const channelId = createChannelAction.payload.result;
            const groupId = createChannelAction.payload.entities.channels[channelId].group;
            expect(
                currentIds({}, createChannelSuccess(createChannelData))
            ).toEqual({ [groupId]: [channelId] })
        });

        it("handles a channel being deleted", () => {
            const { result: channelId } = createChannelAction.payload;
            const { channels } = createChannelAction.payload.entities;
            const { group: groupId } = channels[channelId];
            const initialState = {
                [groupId]: [channelId]
            };

            expect(
                currentIds(initialState, deleteChannelSuccess(deleteChannelData))
            ).toEqual({ [groupId]: [] })
        });

        it("handles a group being created", () => {
            const groupId = createGroupAction.payload.result;
            const channelIds = createGroupAction.payload.entities.groups[groupId].channels;

            expect(
                currentIds({}, createGroupSuccess(createGroupData))
            ).toEqual({ [groupId]: channelIds });
        });

        it("handles a group being joined", () => {
            const groupId = joinGroupAction.payload.result;
            const channelIds = joinGroupAction.payload.entities.groups[groupId].channels;

            expect(
                currentIds({}, joinGroupSuccess(joinGroupData))
            ).toEqual({ [groupId]: channelIds });
        });

        it("handles a group being deleted", () => {
            const groupId = createGroupAction.payload.result;
            const channelIds = createGroupAction.payload.entities.groups[groupId].channels;

            const initialState = { [groupId]: channelIds };
            expect(
                currentIds(initialState, deleteGroupSuccess(deleteGroupData))
            ).toEqual({})
        });

        it("handles loading a user's channels", () => {
            const { groups } = loadUserAction.payload.entities;
            const groupIds = Object.keys(groups);
            const expectedMap = groupIds
            .map(id => [ id, groups[id].channels ])
            .reduce( (object, [ groupId, channels ]) => ({ ...object, [groupId]: channels.reverse() }), {});
            expect(currentIds({}, loadUserData(userData))
            ).toEqual(expectedMap)
        });
    });
});

//it returns the state if there are no channels