import { 
    createTaskSuccess,
    deleteTaskSuccess,
    updateTaskSuccess
} from "./actions";
import { 
    byId, 
    allIds 
} from "./reducers";

describe("Task Reducers", () => {
    describe("byId (Task)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        });

        it("handles creating a task", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles deleting a task", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles updating a task", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles a channel being deleted", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles a group being deleted", () => {
            expect(byId({}, action)).toEqual({});
        });

        it("handles loading a user's tasks", () => {
            expect(byId({}, action)).toEqual({});
        });
    });

    describe("allIds (Task)", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles creating a task", () => {
            expect(allIds([], action)).toEqual([]);
        });

        it("handles deleting a task", () => {
            expect(allIds([], action)).toEqual([]);
        });

        it("handles a channel being deleted", () => {
            expect(allIds([], action)).toEqual([]);
        });

        it("handles a group being deleted", () => {
            expect(allIds([], action)).toEqual([]);
        });

        it("handles loading a user's tasks", () => {
            expect(allIds([], action)).toEqual([]);
        });
    });
});