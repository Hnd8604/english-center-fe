import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/utils';
import { STORAGE_KEYS } from '@/constants';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from storage on mount
    const storedUser = getStorageItem<User>(STORAGE_KEYS.USER_INFO);
    const token = getStorageItem<string>(STORAGE_KEYS.ACCESS_TOKEN);
    
    if (storedUser && token) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData: User, token: string) => {
    setUser(userData);
    setStorageItem(STORAGE_KEYS.USER_INFO, userData);
    setStorageItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  };

  const logout = () => {
    setUser(null);
    removeStorageItem(STORAGE_KEYS.USER_INFO);
    removeStorageItem(STORAGE_KEYS.ACCESS_TOKEN);
    removeStorageItem(STORAGE_KEYS.REFRESH_TOKEN);
  };

  const updateUser = (userData: User) => {
    setUser(userData);
    setStorageItem(STORAGE_KEYS.USER_INFO, userData);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
