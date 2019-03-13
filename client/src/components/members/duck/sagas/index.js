import { all } from "redux-saga/effects";
import { watchNewMembers } from "./MemberJoinSagas";



export default function* membersSaga() {
    yield all([
        watchNewMembers()
    ]);
}   