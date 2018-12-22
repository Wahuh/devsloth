const request = require("supertest");
const { User } = require("../../models/user.model");
const { Group } = require("../../models/group.model");
const { Channel } = require("../../models/channel.model");
process.env.NODE_ENV = "test";
let server;

const insertUserData = async () => {
    const group = await Group.create({ name: "testGroup "});
    const channel = await Channel.create({ group: group._id, name: "testGeneral" });
    await User.collection.insertOne({
        email: "test@gmail.com",
        password: "testingPassword",
        alias: "tester",
        channels: [channel._id],
        groups: [group._id]
    });
}

const clearDb = async () => {
    await User.remove({});
    await Channel.remove({});
    await Group.remove({});
}

describe("/api/v1/me", () => {
    beforeEach(async () => { 
        server = require("../../server");
        insertUserData();
    })

    afterEach(() => { 
        server.close();
        clearDb();
    })

    describe("GET /", () => {
        it("should return the user's data", async () => {
            const user = await User.findOne({ email: "test@gmail.com" });
            const token = user.generateAuthToken();
            const res = await request(server)
                .get("/api/vi/me")
                .set("authorization", `Bearer ${token}`);
            expect(res.status).toBe(200);
        });
    });
});

//if no data in db?