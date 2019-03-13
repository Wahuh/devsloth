import { eventMeta } from "./helpers";

describe("Socket Helpers", () => {
    describe("eventMeta", () => {
        it("generates a meta creator function that returns an object with a socket io event name", () => {
            expect(eventMeta("anySocketEvent")())
            .toEqual({ event: "anySocketEvent" })
        })
    });
})