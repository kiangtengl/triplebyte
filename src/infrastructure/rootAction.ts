import { userActions } from "@/features/user";
import { RouterAction } from "connected-react-router";
import { ActionType } from "typesafe-actions";

export type RootAction = ActionType<typeof userActions> | RouterAction;
