import { take, put, call, select } from "redux-saga/effects";
import { USER_LOAD_INITIAL_DATA_REQUEST } from "./types";
import userApi from "../../../api/userApi";
import { normalizeInitialState } from "../../../schemas/normalize";
import { 
    loadInitialUserDataFailure, 
    loadInitialUserDataSuccess,
} from "./actions";
import { loadCurrentGroupDefault } from "../../group/duck/actions";
import { getCurrentGroupDefault } from "../../group/duck/selectors";

export function* loadInitialUserData() {
    while(true) {
        yield take(USER_LOAD_INITIAL_DATA_REQUEST);

        try {
            const { data } = yield call(userApi.getCurrentUser);
            //console.log(data);
            if (!data) return
            const normalizedData = yield call(normalizeInitialState, data);
            yield put(loadInitialUserDataSuccess(normalizedData));
            const currentGroupDefault = yield select(getCurrentGroupDefault);
            yield put(loadCurrentGroupDefault(currentGroupDefault));
        } catch (error) {
            console.log(error);
            //error.response.data
            yield put(loadInitialUserDataFailure(error));
            return;
        }
    }
}