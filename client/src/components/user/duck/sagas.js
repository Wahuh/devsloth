// import { take, put, call, select } from "redux-saga/effects";
// import { USER_LOAD_INITIAL_DATA_REQUEST } from "./types";
// import userApi from "../../../api/userApi";
// import { normalizeInitialState } from "../../../schemas/normalize";
// import { 
//     loadInitialUserDataFailure, 
//     loadInitialUserDataSuccess,
// } from "./actions";
// import { selectGroup } from "../../group/duck/actions";
// import { loadAppSuccess, loadAppFailure } from "../../app/duck/actions";
// import { getCurrentGroupDefault } from "../../group/duck/selectors";
// import { showAuthentication } from "../../auth/duck/actions";

// export function* loadInitialUserData() {
//     while(true) {
//         yield take(USER_LOAD_INITIAL_DATA_REQUEST);

//         try {
//             const { data } = yield call(userApi.getCurrentUser);
//             //console.log(data);
//             if (!data) return
//             const normalizedData = yield call(normalizeInitialState, data);
//             yield put(loadInitialUserDataSuccess(normalizedData));
//             const currentGroupDefault = yield select(getCurrentGroupDefault);
//             console.log("cgDEFAYKT", currentGroupDefault);
//             yield put(selectGroup(currentGroupDefault));
//             yield put(loadAppSuccess());
//         } catch (error) {
//             console.log(error);
//             //error.response.data
//             yield put(loadInitialUserDataFailure(error));
//             yield put(loadAppFailure());
//             //yield put(showAuthentication());
//             return;
//         }
//     }
// }