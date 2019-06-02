import userSaga from "@/features/user/userSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
