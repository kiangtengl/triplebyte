import { RootState } from "@/infrastructure";
import userConstants from "./userConstants";
import { UserState } from "./userTypes";

const $ = <TOutput>(f: (userState: UserState) => TOutput) => (s: RootState) =>
  f(s[userConstants.namespace]);

const userSelectors = {
  user: $(s => s.user)
};

export default userSelectors;
