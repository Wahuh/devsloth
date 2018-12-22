import { all } from "redux-saga/effects";
import { createTask } from "../components/tasks/duck/sagas";
import { 
    watchJwtRequest,
    watchLoginRequest, 
    watchRegistrationRequest 
} from "../components/auth/duck/sagas";
import { watchCreateGroupRequest, watchDeleteGroupRequest } from "../components/group/duck/sagas";
import {  } from "../components/user/duck/sagas";
import { watchCreateChannelRequest } from "../components/channel/duck/sagas";
import { watchAuthentication } from "../components/app/duck/sagas";
import { watchConnection } from "../components/chat/duck/sagas";

export default function* rootSaga() {
    yield all([
        watchJwtRequest(),
        watchLoginRequest(),
        watchRegistrationRequest(),
        watchAuthentication(),
        watchConnection(),
        
        watchCreateChannelRequest(),
        watchCreateGroupRequest(),
        watchDeleteGroupRequest(),

    ]);
}