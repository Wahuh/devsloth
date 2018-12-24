export const createGroupAction = {
  "type": "group/duck/types/GROUP_CREATE_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c2122a4d0d4ef2fd4130f58": {
          "channels": [
            "5c2122a4d0d4ef2fd4130f57"
          ],
          "_id": "5c2122a4d0d4ef2fd4130f58",
          "alias": "Wahuh",
          "user": "5c210e0eac98592c3c3ceaed",
          "group": "5c2122a4d0d4ef2fd4130f56",
          "__v": 0,
          "id": "5c2122a4d0d4ef2fd4130f58"
        }
      },
      "channels": {
        "5c2122a4d0d4ef2fd4130f57": {
          "_id": "5c2122a4d0d4ef2fd4130f57",
          "name": "everyone",
          "group": "5c2122a4d0d4ef2fd4130f56",
          "__v": 0,
          "members": [
            "5c2122a4d0d4ef2fd4130f58"
          ],
          "tasks": null,
          "id": "5c2122a4d0d4ef2fd4130f57"
        }
      },
      "groups": {
        "5c2122a4d0d4ef2fd4130f56": {
          "_id": "5c2122a4d0d4ef2fd4130f56",
          "name": "test",
          "owner": "5c210e0eac98592c3c3ceaed",
          "inviteId": "NdCFjiRX-",
          "__v": 0,
          "channels": [
            "5c2122a4d0d4ef2fd4130f57"
          ],
          "members": [
            "5c2122a4d0d4ef2fd4130f58"
          ],
          "roles": [],
          "id": "5c2122a4d0d4ef2fd4130f56"
        }
      }
    },
    "result": "5c2122a4d0d4ef2fd4130f56"
  }
}
export const deleteGroupAction = {
  "type": "group/duck/types/GROUP_DELETE_SUCCESS",
  "payload": {
    "entities": {
      "groups": {
        "5c2122a4d0d4ef2fd4130f56": {
          "_id": "5c2122a4d0d4ef2fd4130f56"
        }
      }
    },
    "result": "5c2122a4d0d4ef2fd4130f56"
  }
}

export const updateGroupAction = {
  "type": "group/duck/types/GROUP_UPDATE_SUCCESS",
  "payload": {
    "entities": {
      "groups": {
        "5c2122a4d0d4ef2fd4130f56": {
          "_id": "5c2122a4d0d4ef2fd4130f56",
          "name": "name changed",
          "owner": "5c210e0eac98592c3c3ceaed",
          "inviteId": "NdCFjiRX-",
          "__v": 0,
          "channels": [
            "5c2122a4d0d4ef2fd4130f57"
          ],
          "members": [
            "5c2122a4d0d4ef2fd4130f58"
          ],
          "roles": [],
          "id": "5c2122a4d0d4ef2fd4130f56"
        }
      },
      "members": {
        "5c2122a4d0d4ef2fd4130f58": {
          "channels": [
            "5c2122a4d0d4ef2fd4130f57"
          ],
          "_id": "5c2122a4d0d4ef2fd4130f58",
          "alias": "Wahuh",
          "user": "5c210e0eac98592c3c3ceaed",
          "group": "5c2122a4d0d4ef2fd4130f56",
          "__v": 0,
          "id": "5c2122a4d0d4ef2fd4130f58"
        }
      },
      "channels": {
        "5c2122a4d0d4ef2fd4130f57": {
          "_id": "5c2122a4d0d4ef2fd4130f57",
          "name": "everyone",
          "group": "5c2122a4d0d4ef2fd4130f56",
          "__v": 0,
          "members": [
            "5c2122a4d0d4ef2fd4130f58"
          ],
          "tasks": null,
          "id": "5c2122a4d0d4ef2fd4130f57"
        }
      },
    },
    "result": "5c14ed35e270b13708661a0f"
  }
}