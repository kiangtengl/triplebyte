import { userConstants, UserState } from "@/features/user";
import { RouterState } from "connected-react-router";
import { History } from "history";

export interface RootState {
  router: RouterState;
  [userConstants.namespace]: UserState;
}

const createRootState = (history: History): RootState => ({
  router: {
    location: history.location,
    action: history.action
  },
  [userConstants.namespace]: userConstants.defaultState
});

export default createRootState;
