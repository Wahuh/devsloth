const request = require("supertest");
const { User } = require("../../models/user.model");

const app = require("../../app");

describe("/api/groups", () => {

    describe("POST /", () => {
        let name;
        let token;

        const groupRequest = endpoint => request(app)
        .post(endpoint)
        .set("Authorization", `Bearer ${token}`)
        .send({ name })

        beforeEach(async () => {
            await User.collection.dropIndexes();
            name = "valid group name";
            const user = await User.create({
                email: "test@gmail.com", 
                username: "Tester", 
                password: "test123"
            });
            token = user.generateAuthToken();
        });
        afterEach(async () => {
            await User.deleteMany({});
        });

        const endpoint = "/api/v1/groups";

        it("should return 401 if no token provided", async () => {
            token = "";
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(401);
        });

        it("should return 400 if group name is not provided", async () => {
            name = "";
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(400);
        });

        it("should return 400 if group name is only one character", async () => {
            name = "t";
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(400);
        });

        it("should return 400 if group name exceeds 100 characters", async () => {
            name = "t".repeat(101);
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(400);
        });

        it("should return 200 if request is valid", async () => {
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(200);
        });
    });

    describe("DELETE /:id", () => {
        let token;
        let groupId;

        beforeEach(async () => {
            await User.collection.dropIndexes();
            const user = await User.create({
                email: "test@gmail.com", 
                username: "Tester", 
                password: "test123"
            });
            token = user.generateAuthToken();
        });
        afterEach(async () => {
            await User.deleteMany({});
        });

        const groupRequest = endpoint => request(app)
        .delete(endpoint)
        .set("Authorization", `Bearer ${token}`)

        let endpoint = `/api/v1/groups/${groupId}`;

        it("should return 401 if no token provided", async () => {
            token = "";
            const res = await groupRequest(endpoint);

            expect(res.status).toBe(401);
        });

        it("should return 400 if groupId is falsy", async () => {
            groupId = "";
            console.log(endpoint, token);
            const res = await groupRequest(endpoint);
            expect(res.status).toBe(400);
        });
    });
})