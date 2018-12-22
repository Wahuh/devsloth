import { byId, allIds, currentId } from "./reducers";
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


describe("group reducer", () => {
    describe("byId", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        })

        it("handles creating a group", () => {
            expect(
                byId({}, actions.createGroupSuccess(createGroupPayload))
            )
            .toEqual({
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
            });
        });

        it("handles deleting a group", () => {
            expect(
                byId({
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
                }, actions.deleteGroupSuccess({ _id: "5c14ed35e270b13708661a0f" }))
            ).toEqual({})
        });

        it("handles updating a group", () => {
            expect(
                byId({
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
                }, actions.updateGroupSuccess({}))
            ).toEqual({
                "5c14ed35e270b13708661a0f": {
                    "_id": "5c14ed35e270b13708661a0f",
                    "name": "changed",
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
            })
        });
    });

    describe("allIds", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles creating a group", () => {
            expect(allIds([], actions.createGroupSuccess(createGroupPayload)))
            .toEqual(["5c14ed35e270b13708661a0f"]);
        });

        it("handles deleting a group", () => {
            expect(
                allIds(["5c14ed35e270b13708661a0f"], actions.deleteGroupSuccess({ _id: "5c14ed35e270b13708661a0f"}))
            ).toEqual([])
        })
    });

    describe("currentId", () => {
        it("should return the initial state", () => {
            expect(currentId(undefined, {})).toEqual(null);
        });

        it("handles selecting a group", () => {
            expect(
                currentId(null, actions.selectGroup("5c14ed35e270b13708661a0f"))
            ).toEqual("5c14ed35e270b13708661a0f")
        });

        it("changes to the id of the new group if one is created", () => {
            expect(
                currentId("anyId", actions.createGroupSuccess(createGroupPayload))
            ).toEqual("5c14ed35e270b13708661a0f")
        });

        it("returns null if the current group is deleted", () => {
            expect(
                currentId("5c14ed35e270b13708661a0f", actions.deleteGroupSuccess({ _id: "5c14ed35e270b13708661a0f" }))
            ).toEqual(null)
        });
    });
});
