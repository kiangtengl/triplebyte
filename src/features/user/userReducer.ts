import { RootAction } from "@/infrastructure/rootAction";
import produce from "immer";
import { getType } from "typesafe-actions";
import * as userActions from "./userActions";
import userConstants from "./userConstants";
import { UserState } from "./userTypes";

const userReducer = (state: UserState | undefined, action: RootAction) => {
  if (!state) {
    return userConstants.defaultState;
  }

  switch (action.type) {
    case getType(userActions.set):
      return produce(state, d => {
        d.user = action.payload;
      });
    default:
      return state;
  }
};

export default userReducer;
