import { cardActions } from "@/features/cards";
import { RouterAction } from "connected-react-router";
import { ActionType } from "typesafe-actions";

export type RootAction = ActionType<typeof cardActions> | RouterAction;
