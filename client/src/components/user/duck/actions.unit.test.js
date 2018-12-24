import { loadUserDataSuccess } from "./actions";
import { USER_DATA_LOAD_SUCCESS } from "./types";

import { userData } from "../../../tests/data/user";
import { loadUserPayload } from "../../../tests/payloads/user";

describe("User Actions", () => {
    describe("loadUserData", () => {
        it("returns the normalized user data", () => {
            expect(loadUserDataSuccess(userData))
            .toEqual({ type: USER_DATA_LOAD_SUCCESS, payload: loadUserPayload })
        });
    });
});