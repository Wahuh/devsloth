import { createAction } from "redux-actions";
import { SOCKET_ACTION_EMIT, SOCKET_CONNECTED, SOCKET_DISCONNECTED, SOCKET_CONNECTING, SOCKET_NAMESPACES_CONNECTED, CONNECT_ALL_RECEIVE, SOCKET_DISCONNECT } from "./types";

export const emitSocketAction = createAction(SOCKET_ACTION_EMIT, (payload, event) => ({ ...payload, event }));
export const socketConnected = createAction(SOCKET_CONNECTED, () => "connected");
export const socketDisconnected = createAction(SOCKET_DISCONNECTED, () => "disconnected");
export const socketConnecting = createAction(SOCKET_CONNECTING, () => "connecting");
export const namespacesConnected = createAction(SOCKET_NAMESPACES_CONNECTED);
export const receiveConnectAll = createAction(CONNECT_ALL_RECEIVE);

export const disconnectSocket = createAction(SOCKET_DISCONNECT);