import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email) => {
    const fakeUser = {id: crypto.randomUUID(), email, backgroundColor: '#0ACDFF', imageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png' };
    setUser(fakeUser);
    localStorage.setItem("authUser", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
