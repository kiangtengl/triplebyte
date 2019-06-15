import cardsReducer from "@/features/cards/cardReducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { RootAction } from "./rootAction";
import { RootState } from "./rootState";

function createRootReducer(history: History) {
  return combineReducers<RootState, RootAction>({
    router: connectRouter(history) as any,
    cards: cardsReducer
  });
}

export default createRootReducer;
