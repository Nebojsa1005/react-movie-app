/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { createContext, useContext, useState } from 'react';
import { RegisterForm } from '../types/intefaces/RegisterForm.interface';

const AuthStateContext = createContext({
  email: '12',
  password: '12',
});

const AuthActionsContext = createContext({
  register: (registerForm: RegisterForm): void => { console.log('upada') },
  login: () => {},
});
export const useAuthState = () => useContext(AuthStateContext);
export const useAuthActions = () => useContext(AuthActionsContext);

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<RegisterForm | null>({
    email: '11',
    password: '11'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = (registerForm: RegisterForm) => {
    setUser(prev => (prev = registerForm));
    setIsAuthenticated(true);
  };

  const login = (userData: any): void => {
    const emailCheck = userData.email === user!.email;
    const passwordCheck = userData.password === user!.password;

    if (emailCheck && passwordCheck) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  };

  return (
    <AuthStateContext.Provider value={{ user, isAuthenticated }}>
      <AuthActionsContext.Provider value={{ register, login }}>{children}</AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}
