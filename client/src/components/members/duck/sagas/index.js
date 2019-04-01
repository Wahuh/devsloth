import { all } from "redux-saga/effects";
import { watchNewMembers } from "./MemberJoinSagas";
import { watchMemberTypingStart, watchMemberTypingStop } from "./memberTypingSagas";



export default function* membersSaga() {
    yield all([
        watchNewMembers(),
        watchMemberTypingStart(),
        watchMemberTypingStop()
    ]);
}   