import { 
    addTask, editTask, selectTask
} from "./actions";
import { 
    byId, 
    selectedId
} from "./reducers";
import { createTask, updateTask, deleteTaskByChannel, deleteTaskByGroup, updatePreviousTask } from "../../../tests/data/tasks";
import { removeChannel } from "../../channel/duck/actions";
import { removeGroup } from "../../group/duck/actions";

describe("Task Reducers", () => {
    describe("byId (Task)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        });

        it("handles adding a task", () => {
            expect(byId({}, addTask(createTask.payload)))
            .toEqual(createTask.expectedState)
        });

        it("handles updating the previous task when a new task is added", () => {
            expect(byId(updatePreviousTask.initialState, addTask(updatePreviousTask.payload)))
            .toEqual(updatePreviousTask.expectedState);
        });

        it("handles editing a task", () => {
            expect(byId(updateTask.initialState, editTask(updateTask.payload)))
            .toEqual(updateTask.expectedState);
        });

        it("handles deleting a task", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles a channel being removed", () => {
            expect(byId(deleteTaskByChannel.initialState, removeChannel(deleteTaskByChannel.payload)))
            .toEqual(deleteTaskByChannel.expectedState);
        });

        it("handles a group being removed", () => {
            expect(byId(deleteTaskByGroup.initialState, removeGroup(deleteTaskByGroup.payload)))
            .toEqual(deleteTaskByGroup.expectedState);
        });

        it("handles loading a user's tasks", () => {
            expect(byId({}, action)).toEqual({});
        });
    });

    describe("selectedId (Task)", () => {
        it("should return the initial state", () => {
            expect(selectedId(undefined, {})).toEqual(null);
        });

        it("handles selecting a task", () => {
            expect(selectedId(null, selectTask("taskId")))
            .toEqual("taskId");
        });
    });
});