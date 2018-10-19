import {all, fork} from "redux-saga/effects";
import generalSaga from "./general/general.effects";

export function* rootSaga() {
  yield all([
    fork(generalSaga)
  ])
}
