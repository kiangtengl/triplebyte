import { createStandardAction } from "typesafe-actions";
import { User } from "./userTypes";

export const set = createStandardAction("@user/set")<User>();

export const test = createStandardAction("@user/test")<undefined>();
