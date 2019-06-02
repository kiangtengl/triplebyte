import { userConstants, userReducer } from "@/features/user";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { RootAction } from "./rootAction";
import { RootState } from "./rootState";

function createRootReducer(history: History) {
  return combineReducers<RootState, RootAction>({
    router: connectRouter(history) as any,
    [userConstants.namespace]: userReducer
  });
}

export default createRootReducer;
