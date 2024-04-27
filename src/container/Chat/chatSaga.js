import { takeLatest, put, call, debounce } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import {axiosPost} from "../../utils/request";

function* chat(action) {
    const path = "/chat"
    yield put(actions.actionStart())
    try {
        const res = yield call(
            axiosPost,
            path,
            action.payload
        );
        if (res.status === 200) {
            yield put(actions.chatSuccess(res.data));
            yield put(actions.actionEnd());
        }
    } catch (error) {
        yield put(actions.actionEnd());
    }
}

export default function* () {
    yield takeLatest(constants.CHAT_ACTION, chat);

}
