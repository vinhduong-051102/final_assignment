import { all } from "redux-saga/effects"
import chatSaga from "./container/Chat/chatSaga";

export function* rootSaga() {
    yield all([
        chatSaga()
    ])
}