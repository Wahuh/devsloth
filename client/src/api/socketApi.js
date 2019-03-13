import io from "socket.io-client";

const connect = userId => {
    const socket = io.connect(process.env.API_URL, { query: { userId } });
    return new Promise(
        resolve => socket.on("connect", () => {
            resolve(socket);
        })
    );
}


export default {
    connect,
}