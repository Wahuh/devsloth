import {
    getListHead, getList
} from "./selectors";
import state from "../../../tests/data/state";
import { byId } from "./reducers";
import { addTask } from "../../tasks/duck/actions";
import { createTask } from "../../../tests/data/tasks";


describe("List Selectors", () => {
    describe("getList", () => {
        it("should return the list when given an id", () => {
            expect(
                getList(state, { listId: "5c8bd0e317c7ca1840231c8f" })
            )
            .toEqual(state.lists.byId["5c8bd0e317c7ca1840231c8f"]);
        });
    })

    describe("getListHead", () => {
        let state = {
            lists: {
                byId: {
                    "5c8a5bc7d5811c18a424c0b6": { _id: "5c8a5bc7d5811c18a424c0b6", tasks: [] },
                }
            }
        }

        it("should return the list when given an id", () => {
            state = byId(state, addTask(createTask.payload));
            expect(
                getList(state, { listId: "5c8bd0e317c7ca1840231c8f" })
            )
            .toEqual(state.lists.byId["5c8bd0e317c7ca1840231c8f"]);
        });
    })
})