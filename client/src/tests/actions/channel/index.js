export const createChannelAction = {
  "type": "channel/duck/types/CHANNEL_CREATE_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c216ee5b65e0c10b4348599": {
          "channels": [
            "5c216ee5b65e0c10b4348598",
            "5c28ec5884ffbb0624176a03",
            "5c28ec5b84ffbb0624176a04",
            "5c28ec6784ffbb0624176a06",
            "5c28ec6b84ffbb0624176a07",
            "5c28ed7984ffbb0624176a08",
            "5c2a10da4029df2678363326"
          ],
          "_id": "5c216ee5b65e0c10b4348599",
          "alias": "Tbong",
          "user": "5c2110b0d0d4ef2fd4130f54",
          "group": "5c216ee5b65e0c10b4348597",
          "__v": 0,
          "id": "5c216ee5b65e0c10b4348599"
        }
      },
      "channels": {
        "5c2a10da4029df2678363326": {
          "_id": "5c2a10da4029df2678363326",
          "name": "newChannel",
          "group": "5c216ee5b65e0c10b4348597",
          "__v": 0,
          "members": [
            "5c216ee5b65e0c10b4348599"
          ],
          "tasks": null,
          "id": "5c2a10da4029df2678363326"
        }
      }
    },
    "result": "5c2a10da4029df2678363326"
  }
}

export const deleteChannelAction = {
  "type": "channel/duck/types/CHANNEL_DELETE_SUCCESS",
  "payload": {
    "entities": {
      "members": {
        "5c216ee5b65e0c10b4348599": {
          "channels": [
            "5c216ee5b65e0c10b4348598",
            "5c28ec5884ffbb0624176a03",
            "5c28ec5b84ffbb0624176a04",
            "5c28ec6784ffbb0624176a06",
            "5c28ec6b84ffbb0624176a07",
            "5c28ed7984ffbb0624176a08",
            "5c2a10da4029df2678363326"
          ],
          "_id": "5c216ee5b65e0c10b4348599",
          "alias": "Tbong",
          "user": "5c2110b0d0d4ef2fd4130f54",
          "group": "5c216ee5b65e0c10b4348597",
          "__v": 0,
          "id": "5c216ee5b65e0c10b4348599"
        }
      },
      "channels": {
        "5c2a10da4029df2678363326": {
          "_id": "5c2a10da4029df2678363326",
          "name": "changed the newChannel name",
          "group": "5c216ee5b65e0c10b4348597",
          "__v": 0,
          "members": [
            "5c216ee5b65e0c10b4348599"
          ],
          "tasks": null,
          "id": "5c2a10da4029df2678363326"
        }
      }
    },
    "result": "5c2a10da4029df2678363326"
  }
}

export const updateChannelAction = {
  "type": "channel/duck/types/CHANNEL_UPDATE_SUCCESS",
  "payload": {
    "entities": {
      "channels": {
        "5c2a10da4029df2678363326": {
          "_id": "5c2a10da4029df2678363326",
          "name": "changed the newChannel name",
          "group": "5c216ee5b65e0c10b4348597",
          "__v": 0,
          "members": null,
          "tasks": null,
          "id": "5c2a10da4029df2678363326"
        }
      }
    },
    "result": "5c2a10da4029df2678363326"
  }
}