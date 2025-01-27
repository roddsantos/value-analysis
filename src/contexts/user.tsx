import React, { useMemo, useState } from 'react';
import { ProviderProps } from 'types/context';

export interface UserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = React.createContext<UserContextProps | null>(null);

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (context == null) throw new Error('User context not found');
  return context;
};

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState('');

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
