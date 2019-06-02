import { RootState } from "@/infrastructure";
import { UserState } from "./userTypes";

const $ = <TOutput>(f: (userState: UserState) => TOutput) => (s: RootState) =>
  f(s.user);

const userSelectors = {
  user: $(s => s.user)
};

export default userSelectors;
