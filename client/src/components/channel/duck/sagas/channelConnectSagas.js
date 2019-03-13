import { put, take } from "redux-saga/effects";
import { CHANNEL_CONNECT_SEND} from "../types";
import { emitSocketAction } from "../../../socket/duck/actions";

export function* watchChannelConnect() {
    while(true) {
        const channel = yield take(CHANNEL_CONNECT_SEND);
        yield put(emitSocketAction(channel, "sendChannelConnect"));
    }
}

