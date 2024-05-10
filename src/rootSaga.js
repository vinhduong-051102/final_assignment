import { all } from 'redux-saga/effects';
import chatSaga from './container/Chat/chatSaga';
import createLessonSaga from './container/CreateLesson/createLessonSaga';
import registerSaga from './container/Register/registerSaga';
import loginSaga from './container/Login/loginSaga';
import learnSaga from './container/Learn/learnSaga';
import assigmentSaga from './common/AssigmentWrapper/assigmentSaga';

export function* rootSaga() {
  yield all([
    chatSaga(),
    createLessonSaga(),
    registerSaga(),
    loginSaga(),
    learnSaga(),
    assigmentSaga(),
  ]);
}
