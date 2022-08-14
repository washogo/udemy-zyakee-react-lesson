import { createContext, ReactNode, useState } from "react";

type UserContextDefaultValue = {
  userInfo: UserInfoState | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoState | undefined>>;
}

type UserInfoState = {
  isAdmin: boolean;
}

type ContextProps = {
  children: ReactNode;
}

// 初期値がマストなのはテストをやりやすくするためらしい
export const UserContext = createContext<UserContextDefaultValue>({} as UserContextDefaultValue);


export const UserProvider = (props: ContextProps) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState<UserInfoState | undefined>(undefined);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}