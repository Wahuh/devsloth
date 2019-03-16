export const createTask = {
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

export const updatePreviousTask = {
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
      "next": "newTaskId",
      "isHead": true,
      "members": [],
      "_id": "5c8a6e84d5811c18a424c0bd",
      "list": "5c8a5bc7d5811c18a424c0b6",
      "name": "This is a test task",
      "channel": "5c8a5bbfd5811c18a424c0b4",
      "__v": 0,
  },
      "newTaskId": {
        "_id": "newTaskId",
        "prev": "5c8a6e84d5811c18a424c0bd",
        "name": "This is a new task",
        "next": null,
        "isHead": true,
        "members": [],
        "list": "5c8a5bc7d5811c18a424c0b6",
        "channel": "5c8a5bbfd5811c18a424c0b4"
      }
  },
  action: {
    "type": "tasks/TASK_CREATE_SUCCESS",
    "payload": {
      "entities": {
        "tasks": {
          "newTaskId": {
            "_id": "newTaskId",
            "prev": null,
            "name": "This is a new task",
            "next": null,
            "isHead": true,
            "members": [],
            "list": "5c8a5bc7d5811c18a424c0b6",
            "channel": "5c8a5bbfd5811c18a424c0b4"
          }
        }
      },
      "result": "newTaskId"
    }
},
payload: {
  "entities": {
    "tasks": {
      "newTaskId": {
        "_id": "newTaskId",
        "prev": "5c8a6e84d5811c18a424c0bd",
        "name": "This is a new task",
        "next": null,
        "isHead": true,
        "members": [],
        "list": "5c8a5bc7d5811c18a424c0b6",
        "channel": "5c8a5bbfd5811c18a424c0b4"
      }
    }
  },
  "result": "newTaskId"
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
              "name": "This is a test task32",
              "channel": "5c8a5bbfd5811c18a424c0b4",
              "__v": 0,
              "description": "Updated the description32"
            }
          }
        },
        "result": "5c8a6e84d5811c18a424c0bd"
      }
}

export const deleteTaskByChannel = {
    action: {
        "type": "channel/duck/types/CHANNEL_DELETE_SUCCESS",
        "payload": {
          "entities": {
            "channels": {
              "5c8a5bbfd5811c18a424c0b4": {
                "_id": "5c8a5bbfd5811c18a424c0b4"
              }
            }
          },
          "result": "5c8a5bbfd5811c18a424c0b4"
        }
      },

    initialState: {
        "5c8a6e84d5811c18a424c0bd": {
            "next": "5c8a6e84d5811c18a424c0bc",
            "isHead": true,
            "members": [],
            "_id": "5c8a6e84d5811c18a424c0bd",
            "list": "5c8a5bc7d5811c18a424c0b6",
            "name": "This is a test task",
            "channel": "5c8a5bbfd5811c18a424c0b4",
            "__v": 0,
        },
        "5c8a6e84d5811c18a424c0bc": {
            "next": null,
            "isHead": false,
            "members": [],
            "_id": "5c8a6e84d5811c18a424c0bc",
            "list": "5c8a5bc7d5811c18a424c0b6",
            "name": "This is another test task",
            "channel": "5c8a5bbfd5811c18a424c0b4",
            "__v": 0,
        },
        "anotherId": {
            "next": null,
            "isHead": true,
            "members": [],
            "_id": "anotherId",
            "list": "anotherList",
            "name": "This one shouldn't be removed",
            "channel": "anotherChannel",
            "__v": 0,
        }
    },

    expectedState: {
        "anotherId": {
            "next": null,
            "isHead": true,
            "members": [],
            "_id": "anotherId",
            "list": "anotherList",
            "name": "This one shouldn't be removed",
            "channel": "anotherChannel",
            "__v": 0,
        }
    },
    "payload": {
        "entities": {
          "channels": {
            "5c8a5bbfd5811c18a424c0b4": {
              "_id": "5c8a5bbfd5811c18a424c0b4"
            }
          }
        },
        "result": "5c8a5bbfd5811c18a424c0b4"
      }
}

export const deleteTaskByGroup = {
    initialState: {
        "5c8a6e84d5811c18a424c0bd": {
            "next": "5c8a6e84d5811c18a424c0bc",
            "isHead": true,
            "members": [],
            "_id": "5c8a6e84d5811c18a424c0bd",
            "list": "5c8a5bc7d5811c18a424c0b6",
            "name": "This is a test task",
            "channel": "5c8a5bbfd5811c18a424c0b4",
            "__v": 0,
        },
        "5c8a6e84d5811c18a424c0bc": {
            "next": null,
            "isHead": false,
            "members": [],
            "_id": "5c8a6e84d5811c18a424c0bc",
            "list": "5c8a5bc7d5811c18a424c0b6",
            "name": "This is another test task",
            "channel": "5c8a5bbfd5811c18a424c0b4",
            "__v": 0,
        },
        "anotherId": {
            "next": null,
            "isHead": true,
            "members": [],
            "_id": "anotherId",
            "list": "anotherList",
            "name": "This one shouldn't be removed",
            "channel": "anotherChannel",
            "__v": 0,
        }
    },

    expectedState: {},
    "payload": {
        channelIds: ["5c8a5bbfd5811c18a424c0b4", "anotherChannel"]
      }
}