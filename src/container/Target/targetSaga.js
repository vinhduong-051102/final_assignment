import { takeLatest, put, call, debounce } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import axios from 'axios';

function* getListTarget(action) {
  const path = `http://localhost:8080/api/v1/target/get_list_target?user_id=${action.payload}`;
  yield put(actions.actionStart());
  try {
    const res = yield call(axios.get, path);
    if (res.status === 200) {
      yield put(actions.getListTargetSuccess(res.data.message));
      yield put(actions.actionEnd());
    }
  } catch (error) {
    yield put(actions.actionEnd());
  }
}

export default function* () {
  yield takeLatest(constants.GET_LIST_TARGET_ACTION, getListTarget);
}
