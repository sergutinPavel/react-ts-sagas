import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as generalActions from './general.actions';
import callApi from "../../utils/callApi";

// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const API_ENDPOINT = "https://api.opendota.com";


function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/heroStats');
    yield put(generalActions.ExampleActionSuccess(res));
  } catch (err) {
    yield put(generalActions.ExampleActionError(err))
  }
}


function* watchFetchRequest() {
  yield takeEvery(generalActions.ActionTypes.EXAMPLE_ACTION, handleFetch)
}

function* generalSaga() {
  yield all([
    fork(watchFetchRequest)
  ])
}

export default generalSaga
