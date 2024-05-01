import { takeLatest, put, call, debounce } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import axios from "axios";

function* getListSuggestWord(action) {
    const path = "http://192.168.0.110:6868/suggest_word"
    yield put(actions.actionStart())
    try {
        const res = yield call(
            axios.post,
            path,
            action.payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (res.status === 200) {
            yield put(actions.getSuggestWordSuccess(res.data));
            yield put(actions.actionEnd());
        }
    } catch (error) {
        yield put(actions.actionEnd());
    }
}

function* getListSuggestMeaning(action) {
    const path = "http://192.168.0.110:6868/translate"
    yield put(actions.actionStart())
    try {
        const res = yield call(
            axios.post,
            path,
            action.payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (res.status === 200) {
            yield put(actions.getSuggestMeaningSuccess(res.data));
            yield put(actions.actionEnd());
        }
    } catch (error) {
        yield put(actions.actionEnd());
    }
}

export default function* () {
    yield debounce(500, constants.GET_SUGGEST_WORD_ACTION, getListSuggestWord);
    yield debounce(500, constants.GET_SUGGEST_MEANING_ACTION, getListSuggestMeaning);

}
