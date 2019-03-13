import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import { take, put, call, apply, fork, select, cancel, all } from "redux-saga/effects";

import { USER_DATA_LOAD } from "../../../user/duck/types";
import { memberJoin, receiveMemberChannelJoin, receiveMemberChannelLeave, receiveMemberGroupJoin, receiveMemberGroupLeave, receiveNewMember } from "../../../members/duck/actions";


import { SOCKET_ACTION_EMIT, SOCKET_DISCONNECT } from "../types";
import { receiveMessage, receiveMessageTypingStart, receiveMessageTypingStop } from "../../../messages/duck/actions";
import { socketConnected, socketDisconnected, namespacesConnected, receiveConnectAll } from "../actions";
import { receiveChannelCreate, receiveChannelDelete, receiveChannelUpdate, receiveChannelConnect, updateChannelSuccess } from "../../../channel/duck/actions";
import { receiveGroupDelete, receiveGroupUpdate, receiveGroupConnect, updateGroupSuccess } from "../../../group/duck/actions";
import { receiveListCreate, receiveListDelete, receiveListUpdate, createListSuccess, updateListSuccess } from "../../../lists/duck/actions";
import { receiveTaskCreate, receiveTaskUpdate, receiveTaskDelete, createTaskSuccess, updateTaskSuccess } from "../../../tasks/duck/actions";

const connect = userId => {
    const socket = io.connect(process.env.API_URL, { query: { userId } });
    return new Promise(
        resolve => socket.on("connect", () => {
            resolve(socket);
        })
    );
}

const connectToNamespace = (namespace) => {
    io.connect(`${process.env.API_URL}/${namespace}`);
}

const createSocketChannel = socket => 
    eventChannel(
        emit => {
            socket.on("receiveChannelConnect", channel => emit(receiveChannelConnect(channel)));
            socket.on("receiveChannelCreate", channel => emit(receiveChannelCreate(channel)));
            socket.on("receiveChannelDelete", channel => emit(receiveChannelDelete(channel)));
            // socket.on("receiveChannelUpdate", channel => emit(receiveChannelUpdate(channel)));

            socket.on("receiveGroupConnect", group => emit(receiveGroupConnect(group)));
            socket.on("receiveGroupDelete", group => emit(receiveGroupDelete(group)));
            socket.on("receiveGroupUpdate", group => emit(receiveGroupUpdate(group)));

            socket.on("receiveListCreate", list => emit(receiveListCreate(list)));
            socket.on("receiveListUpdate", list => emit(receiveListUpdate(list)));
            socket.on("receiveListDelete", list => emit(receiveListDelete(list)));

            socket.on("receiveMemberChannelJoin", member => emit(receiveMemberChannelJoin(member)));
            socket.on("receiveMemberChannelLeave", member => emit(receiveMemberChannelLeave(member)));
            socket.on("receiveMemberGroupJoin", member => emit(receiveMemberGroupJoin(member)));
            socket.on("receiveMemberGroupLeave", member => emit(receiveMemberGroupLeave(member)));
            
            socket.on("group member join", payload => {
                emit(receiveNewMember(payload));
                //emit(receiveMessage(message)); not being detected
            });
            socket.on("group member leave", payload => {
                emit(removeMember(payload));
            });

            socket.on("group update", payload => {
                emit(updateGroupSuccess(payload));
            });

            socket.on("channel topic update", channel => {
                emit(updateChannelSuccess(channel))
            });

            socket.on("channel list create", list => {
                emit(createListSuccess(list));
            });
            socket.on("channel list update", list => {
                emit(updateListSuccess(list));
            });

            socket.on("channel task create", task => {
                emit(createTaskSuccess(task));
            })

            socket.on("channel task update", task => {
                console.log(task, "receive");
                emit(updateTaskSuccess(task));
            })

            socket.on("list delete", payload => {

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
        const { result: userId } = payload;
        const connectionData = yield call(generateConnectionData, payload);
        const socket = yield call(connect, userId);
        yield put(socketConnected());
        const socketChannel = yield call(createSocketChannel, socket);
        yield fork(watchEmitActions, socket);
        yield fork(watchActions, socketChannel);

        if (connectionData) {
            yield apply(socket, socket.emit, ["connectAll", connectionData])
        }
        yield take(SOCKET_DISCONNECT);
        yield apply(socket, socket.close);
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



function* watchActions(socketChannel) {
    while(true) {
        const action = yield take(socketChannel);
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

export default function* socketSaga() {
    yield all([
        watchConnection(),
    ]);
}