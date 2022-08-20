import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { User } from '../types/api/user';

export type AllUserContextType = {
  allUsers: Array<User>;
  setAllUsers: Dispatch<SetStateAction<Array<User>>>;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AllUserContext = createContext({} as AllUserContextType);

export const AllUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [allUsers, setAllUsers] = useState<Array<User>>([]);

  return (
    <AllUserContext.Provider value={{ allUsers, setAllUsers }}>{children}</AllUserContext.Provider>
  );
};
