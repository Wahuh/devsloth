import { all } from "redux-saga/effects";
import { watchTaskAdd } from "./taskAddSagas";
import { watchTaskCreateRequest } from "./taskCreateSagas";
import { watchTaskDeleteRequest } from "./taskDeleteSagas";
import { watchTaskEdit } from "./taskEditSagas";
import { watchTaskMoveRequest } from "./taskMoveSagas";
import { watchTaskRemove } from "./taskRemoveSagas";
import { watchTaskUpdateRequest } from "./taskUpdateSagas";

export default function* tasksSaga() {
    yield all([
        watchTaskAdd(),
        watchTaskCreateRequest(),
        watchTaskDeleteRequest(),
        watchTaskEdit(),
        watchTaskMoveRequest(),
        watchTaskRemove(),
        watchTaskUpdateRequest(),
    ]);
}