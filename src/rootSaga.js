import { all } from "redux-saga/effects"
import chatSaga from "./container/Chat/chatSaga";
import createLessonSaga from "./container/CreateLesson/createLessonSaga";

export function* rootSaga() {
    yield all([
        chatSaga(),
        createLessonSaga()
    ])
}