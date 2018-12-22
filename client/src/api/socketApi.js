import io from "socket.io-client";
import { normalize } from "normalizr";
import schemas from "../schemas";
import { receiveChatMessageSuccess, receiveChatTypingSuccess } from "../components/chat/duck/actions";
import { eventChannel, delay } from "redux-saga";

const connect = () => {
    const socket = io.connect(process.env.API_URL);
    return new Promise(
        resolve => socket.on("connect", () => resolve(socket))
    );
}

const createSocketChannel = socket => eventChannel(
    emit => {
        let _id = 0;
        const handler = (payload) => {
            emit(payload);
        }
        socket.on("chat", payload => {
            payload._id = _id;
            const normalized = normalize(payload, schemas.message);
            emit(receiveChatMessageSuccess(normalized));
            _id += 1;
        });

        socket.on("typing", payload => emit(receiveChatTypingSuccess(payload)));
        return () => socket.off("chat", handler);
    }
);

export default {
    connect,
    createSocketChannel
}