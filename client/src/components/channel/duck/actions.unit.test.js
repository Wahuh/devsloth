import {
    createChannelSuccess,
    updateChannelSuccess,
    deleteChannelSuccess,
} from "./actions";

import {
    createChannelData
} from "../../../tests/data/channel";

import {
    createChannelAction
} from "../../../tests/actions/channel";

describe("Channel Actions", () => {
    describe("createChannelSuccess", () => {
        it("returns the normalized created channel", () => {
            expect(createChannelSuccess(createChannelData))
            .toEqual(createChannelAction);
        });
    });
});