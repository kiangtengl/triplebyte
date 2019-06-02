import { all, put, takeEvery } from "redux-saga/effects";
import { ActionType, getType } from "typesafe-actions";
import * as userActions from "./userActions";

function* logWhenUserChanges({ payload }: ActionType<typeof userActions.set>) {
  yield put(userActions.test());
}

export function* userSaga() {
  yield all([takeEvery(getType(userActions.set), logWhenUserChanges)]);
}

export default userSaga;
