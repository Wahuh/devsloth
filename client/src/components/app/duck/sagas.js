import { take, put, call, select } from "redux-saga/effects";
import { normalizeAppData } from "../../../schemas";

import { loadAppDataSuccess } from "./actions";

import { 
    AUTH_JWT_SUCCESS,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTRATION_SUCCESS
} from "../../auth/duck/types";

import { selectGroup } from "../../group/duck/actions";
import { getCurrentGroupIdDefault } from "../../group/duck/selectors";

import { selectChannel } from "../../channel/duck/actions";
import { getCurrentChannelIdsDefault } from "../../channel/duck/selectors";

import { hideUiModal } from "../../ui/duck/actions"; 

export function* watchAuthentication() {
    //payload will have the user's initial data
    while(true) {
        const { payload } = yield take([
            AUTH_JWT_SUCCESS,
            AUTH_LOGIN_SUCCESS,
            AUTH_REGISTRATION_SUCCESS
        ]);

        console.log("authpayload", payload);

        yield call(handleAppDataLoad, payload);
    }
}

function* handleAppDataLoad(payload) {
    //if no data returned?
    const data = yield call(normalizeAppData, payload);
    //rootReducer will load the user's app data into the store
    yield put(loadAppDataSuccess(data));
    
    //once data is in the store, select a group which the user will see first
    const currentGroupId = yield select(getCurrentGroupIdDefault);
    yield put(selectGroup({ _id: currentGroupId }));

    const channelIds = yield select(getCurrentChannelIdsDefault);
    yield put(selectChannel(channelIds));

    yield put(hideUiModal());
}