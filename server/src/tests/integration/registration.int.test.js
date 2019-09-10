const request = require("supertest");
const { User } = require("../../models/user.model");

let server;

describe("/api/register", () => {
    beforeEach(async () => {
        server = await require("../../server");
    });
    afterEach(async () => {
        await server.close();
        await User.remove({});
    });

    describe("POST /", () => {
        it("should return 200, a jwt token and user data on success", async () => {
            const res = await request(server)
            .post("/api/v1/register")
            .send({ 
                email: "test@gmail.com", 
                username: "Tester", 
                password: "test123" 
            });

            expect(res.status).toBe(200);
        });

        it("should return 200, if the email has already been registered", async () => {
            await User.collection.insertOne({
                email: "test@gmail.com", 
                username: "Tester", 
                password: "test123" 
            });

            const res = await request(server)
            .post("/api/v1/register")
            .send({
                email: "test@gmail.com", 
                username: "Tester", 
                password: "test123" 
            });

            expect(res.status).toBe(200);
        });
    });
})