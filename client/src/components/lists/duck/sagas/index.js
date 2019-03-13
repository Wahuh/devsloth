import { all } from "redux-saga/effects";
import { watchCreateListRequest } from "./listCreateSagas";
import { watchListAdd } from "./listAddSagas";
import { watchListEdit } from "./listEditSagas";
import { watchListUpdateRequest } from "./listUpdateSagas";


export default function* listsSaga() {
    yield all([
        watchCreateListRequest(),
        watchListUpdateRequest(),
        watchListAdd(),
        watchListEdit()
    ]);
}

