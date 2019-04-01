import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import { take, put, call, apply, fork, select, all } from "redux-saga/effects";

import { USER_DATA_LOAD } from "../../../user/duck/types";
import { memberJoin, receiveMemberChannelJoin, receiveMemberChannelLeave, receiveMemberGroupJoin, receiveMemberGroupLeave, receiveNewMember } from "../../../members/duck/actions";

import { SOCKET_ACTION_EMIT, SOCKET_DISCONNECT } from "../types";
import { receiveMessage, receiveMessageTypingStart, receiveMessageTypingStop } from "../../../messages/duck/actions";
import { socketConnected, socketDisconnected, namespacesConnected, receiveConnectAll } from "../actions";
import { receiveChannelCreate, receiveChannelDelete, receiveChannelUpdate, receiveChannelConnect, updateChannelSuccess } from "../../../channel/duck/actions";
import { receiveGroupDelete, receiveGroupUpdate, receiveGroupConnect } from "../../../group/duck/actions";
import { receiveListCreate, receiveListDelete, receiveListUpdate } from "../../../lists/duck/actions";
import { receiveTaskCreate, receiveTaskUpdate, receiveTaskDelete } from "../../../tasks/duck/actions";

const connect = userId => {
    const socket = io.connect(process.env.API_URL, { query: { userId } });
    return new Promise(
        resolve => socket.on("connect", () => {
            resolve(socket);
        })
    );
}

const createSocketChannel = socket => 
    eventChannel(
        emit => {
            socket.on("group member join", payload => {
                emit(receiveNewMember(payload));
            });
            socket.on("group member leave", payload => {
                emit(removeMember(payload));
            });

            socket.on("channel topic update", channel => {
                emit(updateChannelSuccess(channel))
            });

            socket.on("receiveMessage", message => emit(receiveMessage(message)));
            socket.on("receiveMessageTypingStart", memberId => emit(receiveMessageTypingStart(memberId)));
            socket.on("receiveMessageTypingStop", memberId => emit(receiveMessageTypingStop(memberId)));

            socket.on("receiveTaskCreate", task => emit(receiveTaskCreate(task)));
            socket.on("receiveTaskUpdate", task => emit(receiveTaskUpdate(task)));
            socket.on("receiveTaskDelete", task => emit(receiveTaskDelete(task)));

            socket.on("receiveConnectAll", data => emit(receiveConnectAll(data)));

            socket.on("disconnect", reason => {
                emit(socketDisconnected());
            });
            return () => socket.off("chat", handler);
        }
);

export function* watchConnection() {
    while(true) {
        const { payload } = yield take(USER_DATA_LOAD);
        //all the user's groupIds to create groupIds on the server
        const { result: userId } = payload;
        const connectionData = yield call(generateConnectionData, payload);
        yield call(handleConnection, connectionData, userId);
    }
}

export function* generateConnectionData(payload) {
    const { entities, result: userId } = payload;
    const { groups, channels, members } = entities;
    
    let data = {};
    
    if (groups) {
        const groupIds = Object.keys(groups);
        for (let i = 0; i < groupIds.length; i++) {
            const groupId = groupIds[i];
            const channels = groups[groupId].channels;
            if (channels.length > 0) {
                data[groupId] = channels; 
            } else {
                data[groupId] = []
            }
        }
        return data;
    }
    return null;
}

export function* handleConnection(data, userId) {
    const socket = yield call(connect, userId);

    yield put(socketConnected());
    const socketChannel = yield call(createSocketChannel, socket);
    yield fork(watchEmitActions, socket);
    yield fork(watchDisconnect, socket);
    yield fork(watchActions, socketChannel);
    if (data) {
        yield apply(socket, socket.emit, ["connectAll", data])
    }
}



function* watchActions(socketChannel) {
    while(true) {
        const action = yield take(socketChannel);
        console.log("ACTION", action);
        yield put(action);
    }
}

export function* watchEmitActions(socket) {
    while(true) {
        const action = yield take(SOCKET_ACTION_EMIT);
        const { payload } = action;
        const { event } = payload;

        yield apply(socket, socket.emit, [event, payload]);
    }
}

export function* watchDisconnect(socket) {
    while(true) {
        yield take(SOCKET_DISCONNECT);
        yield apply(socket, socket.close);
    }
}


export default function* connectionSaga() {
    yield all([

    ]);
}