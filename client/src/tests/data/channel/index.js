export const deleteChannel = {
  action: {
      "type": "tasks/TASK_CREATE_SUCCESS",
      "payload": {
        "entities": {
          "tasks": {
            "5c8a6e84d5811c18a424c0bd": {
              "_id": "5c8a6e84d5811c18a424c0bd",
              "prev": null,
              "name": "This is a test task",
              "next": null,
              "isHead": true,
              "members": [],
              "list": "5c8a5bc7d5811c18a424c0b6",
              "channel": "5c8a5bbfd5811c18a424c0b4"
            }
          }
        },
        "result": "5c8a6e84d5811c18a424c0bd"
      }
  },
  expectedState: {
      "5c8a6e84d5811c18a424c0bd": {
          "_id": "5c8a6e84d5811c18a424c0bd",
          "prev": null,
          "name": "This is a test task",
          "next": null,
          "isHead": true,
          "members": [],
          "list": "5c8a5bc7d5811c18a424c0b6",
          "channel": "5c8a5bbfd5811c18a424c0b4"
      }
  },

  payload: {
      "entities": {
        "tasks": {
          "5c8a6e84d5811c18a424c0bd": {
            "_id": "5c8a6e84d5811c18a424c0bd",
            "prev": null,
            "name": "This is a test task",
            "next": null,
            "isHead": true,
            "members": [],
            "list": "5c8a5bc7d5811c18a424c0b6",
            "channel": "5c8a5bbfd5811c18a424c0b4"
          }
        }
      },
      "result": "5c8a6e84d5811c18a424c0bd"
  }
}

export const updateTask = {
  initialState: {
      "5c8a6e84d5811c18a424c0bd": {
          "next": null,
          "isHead": true,
          "members": [],
          "_id": "5c8a6e84d5811c18a424c0bd",
          "list": "5c8a5bc7d5811c18a424c0b6",
          "name": "This is a test task",
          "channel": "5c8a5bbfd5811c18a424c0b4",
          "__v": 0,
      }
  },
  expectedState: {
      "5c8a6e84d5811c18a424c0bd": {
          "next": null,
          "isHead": true,
          "members": [],
          "_id": "5c8a6e84d5811c18a424c0bd",
          "list": "5c8a5bc7d5811c18a424c0b6",
          "name": "This is a test task32",
          "channel": "5c8a5bbfd5811c18a424c0b4",
          "__v": 0,
          "description": "Updated the description32"
      }
  },
  action: {
      "type": "tasks/TASK_UPDATE_SUCCESS",
      "payload": {
        "entities": {
          "tasks": {
            "5c8a6e84d5811c18a424c0bd": {
              "next": null,
              "isHead": true,
              "members": [],
              "_id": "5c8a6e84d5811c18a424c0bd",
              "list": "5c8a5bc7d5811c18a424c0b6",
              "name": "This is a test task",
              "channel": "5c8a5bbfd5811c18a424c0b4",
              "__v": 0,
              "description": "Updated the description32"
            }
          }
        },
        "result": "5c8a6e84d5811c18a424c0bd"
      }
    },
    "payload": {
      "entities": {
        "tasks": {
          "5c8a6e84d5811c18a424c0bd": {
            "next": null,
            "isHead": true,
            "members": [],
            "_id": "5c8a6e84d5811c18a424c0bd",
            "list": "5c8a5bc7d5811c18a424c0b6",
            "name": "This is a test task",
            "channel": "5c8a5bbfd5811c18a424c0b4",
            "__v": 0,
            "description": "Updated the description32"
          }
        }
      },
      "result": "5c8a6e84d5811c18a424c0bd"
    }
}