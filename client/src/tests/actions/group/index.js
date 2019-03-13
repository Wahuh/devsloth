export const createGroupAction = {
  "type": "group/duck/types/GROUP_CREATE_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c291a265a4a6d43c063478f": {
          "channels": [
            "5c291a265a4a6d43c063478e"
          ],
          "_id": "5c291a265a4a6d43c063478f",
          "alias": "Tbong",
          "user": "5c2110b0d0d4ef2fd4130f54",
          "group": "5c291a265a4a6d43c063478d",
          "__v": 0,
          "id": "5c291a265a4a6d43c063478f"
        }
      },
      "channels": {
        "5c291a265a4a6d43c063478e": {
          "_id": "5c291a265a4a6d43c063478e",
          "name": "everyone",
          "group": "5c291a265a4a6d43c063478d",
          "__v": 0,
          "members": [
            "5c291a265a4a6d43c063478f"
          ],
          "tasks": null,
          "id": "5c291a265a4a6d43c063478e"
        }
      },
      "groups": {
        "5c291a265a4a6d43c063478d": {
          "_id": "5c291a265a4a6d43c063478d",
          "name": "test",
          "owner": "5c2110b0d0d4ef2fd4130f54",
          "inviteId": "8UA2H0d4z",
          "__v": 0,
          "channels": [
            "5c291a265a4a6d43c063478e"
          ],
          "members": [
            "5c291a265a4a6d43c063478f"
          ],
          "roles": [],
          "id": "5c291a265a4a6d43c063478d"
        }
      }
    },
    "result": "5c291a265a4a6d43c063478d"
  }
}

export const deleteGroupAction = {
  "type": "group/duck/types/GROUP_DELETE_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c291a265a4a6d43c063478f": {
          "channels": [
            "5c291a265a4a6d43c063478e"
          ],
          "_id": "5c291a265a4a6d43c063478f",
          "alias": "Tbong",
          "user": "5c2110b0d0d4ef2fd4130f54",
          "group": "5c291a265a4a6d43c063478d",
          "__v": 0,
          "id": "5c291a265a4a6d43c063478f"
        }
      },
      "channels": {
        "5c291a265a4a6d43c063478e": {
          "_id": "5c291a265a4a6d43c063478e",
          "name": "everyone",
          "group": "5c291a265a4a6d43c063478d",
          "__v": 0,
          "members": [
            "5c291a265a4a6d43c063478f"
          ],
          "tasks": null,
          "id": "5c291a265a4a6d43c063478e"
        }
      },
      "groups": {
        "5c291a265a4a6d43c063478d": {
          "_id": "5c291a265a4a6d43c063478d",
          "name": "test name change",
          "owner": "5c2110b0d0d4ef2fd4130f54",
          "inviteId": "8UA2H0d4z",
          "__v": 0,
          "channels": [
            "5c291a265a4a6d43c063478e"
          ],
          "members": [
            "5c291a265a4a6d43c063478f"
          ],
          "roles": [],
          "id": "5c291a265a4a6d43c063478d"
        }
      }
    },
    "result": "5c291a265a4a6d43c063478d"
  }
}
export const updateGroupAction = {
  "type": "group/duck/types/GROUP_UPDATE_SUCCESS",
  "payload": {
    "entities": {
      "groups": {
        "5c291a265a4a6d43c063478d": {
          "_id": "5c291a265a4a6d43c063478d",
          "name": "test name change",
          "owner": "5c2110b0d0d4ef2fd4130f54",
          "inviteId": "8UA2H0d4z",
          "__v": 0,
          "channels": null,
          "members": null,
          "roles": null,
          "id": "5c291a265a4a6d43c063478d"
        }
      }
    },
    "result": "5c291a265a4a6d43c063478d"
  }
}

export const joinGroupAction = {
  "type": "group/duck/types/GROUP_JOIN_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c2d258cbe602b408ce8dd93": {
          "channels": [
            "5c2d258cbe602b408ce8dd92"
          ],
          "_id": "5c2d258cbe602b408ce8dd93",
          "alias": "Wahuh",
          "user": "5c2d255dbe602b408ce8dd90",
          "group": "5c2d258cbe602b408ce8dd91",
          "__v": 0,
          "id": "5c2d258cbe602b408ce8dd93"
        },
        "5c2dfb16c221ca3df8a571fa": {
          "channels": [
            "5c2d258cbe602b408ce8dd92"
          ],
          "_id": "5c2dfb16c221ca3df8a571fa",
          "alias": "Thanh",
          "user": "5c2ce7a4cf90c04860521eca",
          "group": "5c2d258cbe602b408ce8dd91",
          "__v": 0,
          "id": "5c2dfb16c221ca3df8a571fa"
        }
      },
      "channels": {
        "5c2d258cbe602b408ce8dd92": {
          "_id": "5c2d258cbe602b408ce8dd92",
          "name": "everyone",
          "group": "5c2d258cbe602b408ce8dd91",
          "__v": 0,
          "members": [
            "5c2d258cbe602b408ce8dd93",
            "5c2dfb16c221ca3df8a571fa"
          ],
          "tasks": null,
          "id": "5c2d258cbe602b408ce8dd92"
        }
      },
      "groups": {
        "5c2d258cbe602b408ce8dd91": {
          "_id": "5c2d258cbe602b408ce8dd91",
          "name": "hey",
          "owner": "5c2d255dbe602b408ce8dd90",
          "inviteId": "qrAWZcnl_",
          "__v": 0,
          "channels": [
            "5c2d258cbe602b408ce8dd92"
          ],
          "members": [
            "5c2d258cbe602b408ce8dd93",
            "5c2dfb16c221ca3df8a571fa"
          ],
          "roles": [],
          "id": "5c2d258cbe602b408ce8dd91"
        }
      }
    },
    "result": "5c2d258cbe602b408ce8dd91"
  }
}

export const queuedInviteAction = {
  "type": "group/GROUP_JOIN_INVITE_QUEUED",
  "payload": "qrAWZcnl_"
}

export const leaveGroupAction = {
  
}