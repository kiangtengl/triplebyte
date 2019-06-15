import { cardConstants, CardState } from "@/features/cards";
import { RouterState } from "connected-react-router";
import { History } from "history";

export interface RootState {
  router: RouterState;
  cards: CardState;
}

const createRootState = (history: History): RootState => ({
  router: {
    location: history.location,
    action: history.action
  },
  cards: cardConstants.defaultState
});

export default createRootState;
