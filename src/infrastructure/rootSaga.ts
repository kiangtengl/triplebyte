import cardsSaga from "@/features/cards/cardSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([cardsSaga()]);
}

export default rootSaga;
