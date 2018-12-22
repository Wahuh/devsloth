import { byId, allIds, currentIds } from "./reducers";
import { createGroupSuccess, deleteGroupSuccess } from "../../group/duck/actions";
import * as actions from "./actions";

const createGroupPayload = {
    "entities": {
      "members": {
        "5c1147b3c6e5611ef45229b5": {
          "channels": [
            "5c11330955e8631a10b56c95",
            "5c114af4033247581cf3fe02",
            "5c114b26191a671ff014284f",
            "5c114ba2a6d2e1246072ba95",
            "5c13f898d4399631f4b3287f",
            "5c13f97cd4399631f4b32881",
            "5c14ed35e270b13708661a10"
          ],
          "_id": "5c1147b3c6e5611ef45229b5",
          "groups": [
            "5c11330955e8631a10b56c94",
            null,
            null,
            "5c114ba2a6d2e1246072ba94",
            "5c13f898d4399631f4b3287e",
            "5c13f97cd4399631f4b32880",
            "5c14ed35e270b13708661a0f"
          ]
        }
      },
      "channels": {
        "5c14ed35e270b13708661a10": {
          "_id": "5c14ed35e270b13708661a10",
          "name": "general",
          "group": "5c14ed35e270b13708661a0f",
          "__v": 0,
          "members": [
            "5c1147b3c6e5611ef45229b5"
          ],
          "tasks": null,
          "id": "5c14ed35e270b13708661a10"
        }
      },
      "groups": {
        "5c14ed35e270b13708661a0f": {
          "_id": "5c14ed35e270b13708661a0f",
          "name": "adad",
          "__v": 0,
          "channels": [
            "5c14ed35e270b13708661a10"
          ],
          "members": [
            "5c1147b3c6e5611ef45229b5"
          ],
          "roles": null,
          "id": "5c14ed35e270b13708661a0f"
        }
      }
    },
    "result": "5c14ed35e270b13708661a0f"
}

const createChannelPayload = 
{
    "entities": {
      "members": {
        "5c1147b3c6e5611ef45229b5": {
          "channels": [
            "5c156bfd5cd22e3ec0ef5f6e"
          ],
          "_id": "5c1147b3c6e5611ef45229b5"
        }
      },
      "channels": {
        "5c156bfd5cd22e3ec0ef5f6e": {
          "_id": "5c156bfd5cd22e3ec0ef5f6e",
          "name": "heya",
          "group": "5c11330955e8631a10b56c94",
          "__v": 0,
          "members": [
            "5c1147b3c6e5611ef45229b5"
          ],
          "tasks": null,
          "id": "5c156bfd5cd22e3ec0ef5f6e"
        }
      }
    },
    "result": "5c156bfd5cd22e3ec0ef5f6e"
  }


describe("channel reducer", () => {
    describe("byId", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        })

        it("handles creating a channel", () => {
            expect(
                byId({}, actions.createChannelSuccess(createChannelPayload))
            )
            .toEqual({
                "5c156bfd5cd22e3ec0ef5f6e": {
                    "_id": "5c156bfd5cd22e3ec0ef5f6e",
                    "name": "heya",
                    "group": "5c11330955e8631a10b56c94",
                    "__v": 0,
                    "members": [
                      "5c1147b3c6e5611ef45229b5"
                    ],
                    "tasks": null,
                    "id": "5c156bfd5cd22e3ec0ef5f6e"
                  }
            });
        });

        it("handles deleting a channel", () => {
            expect(
                byId({
                    "5c156bfd5cd22e3ec0ef5f6e": {
                        "_id": "5c156bfd5cd22e3ec0ef5f6e",
                        "name": "heya",
                        "group": "5c11330955e8631a10b56c94",
                        "__v": 0,
                        "members": [
                          "5c1147b3c6e5611ef45229b5"
                        ],
                        "tasks": null,
                        "id": "5c156bfd5cd22e3ec0ef5f6e"
                      }
                }, actions.deleteChannelSuccess({ _id: "5c156bfd5cd22e3ec0ef5f6e" }))
            ).toEqual({})
        });
    });

    describe("allIds", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles creating a channel", () => {
            expect(
                allIds([], actions.createChannelSuccess(createChannelPayload))
            ).toEqual(["5c156bfd5cd22e3ec0ef5f6e"])
        });

        it("handles deleting a channel", () => {
            expect(
                allIds(["5c156bfd5cd22e3ec0ef5f6e"], actions.deleteChannelSuccess({ _id: "5c156bfd5cd22e3ec0ef5f6e"}))
            ).toEqual([])
        });

        it("handles creating a channel after a group is created", () => {
            expect(
                allIds([], createGroupSuccess(createGroupPayload))
            ).toEqual(["5c14ed35e270b13708661a10"])
        });

        it("handles deleting channels after a group is deleted", () => {
            expect(
                allIds(["5c14ed35e270b13708661a10"], deleteGroupSuccess({ _id: "5c14ed35e270b13708661a0f" }))
            ).toEqual([])
        });
    });

    describe("currentIds", () => {
        it("should return the initial state", () => {
            expect(currentIds(undefined, {})).toEqual({});
        });

        it("handles selecting a channel", () => {
            expect(
                currentIds({}, actions.selectChannel({ "5c11330955e8631a10b56c94": "5c156bfd5cd22e3ec0ef5f6e" }))
            ).toEqual({ "5c11330955e8631a10b56c94": "5c156bfd5cd22e3ec0ef5f6e" })
        });

        it("handles creating a channel", () => {
            expect(
                currentIds({}, actions.createChannelSuccess(createChannelPayload))
            ).toEqual({ "5c11330955e8631a10b56c94": "5c156bfd5cd22e3ec0ef5f6e" })
        });

        it("handles deleting a channel", () => {
            const initialState = { "5c11330955e8631a10b56c94": "5c156bfd5cd22e3ec0ef5f6e" };
            expect(
                currentIds(initialState, actions.deleteChannelSuccess({ _id: "5c156bfd5cd22e3ec0ef5f6e" }))
            ).toEqual({ "5c11330955e8631a10b56c94": null })
        });

        it("handles creating a group", () => {
            expect(
                currentIds({}, createGroupSuccess(createGroupPayload))
            ).toEqual({ "5c14ed35e270b13708661a0f": "5c14ed35e270b13708661a10" });
        });

        it("handles deleting a group", () => {
            const initialState = { "5c14ed35e270b13708661a0f": "5c14ed35e270b13708661a10" };
            expect(
                currentIds(initialState, deleteGroupSuccess({ _id: "5c14ed35e270b13708661a0f" }))
            ).toEqual({})
        });
    });
});