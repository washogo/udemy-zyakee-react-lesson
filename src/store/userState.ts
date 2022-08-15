import { atom } from "recoil";
import { UserInfoState } from "../provider/UserProvider";

export const userState = atom<UserInfoState>({
  key: "userState",
  default: { isAdmin: false },
});
