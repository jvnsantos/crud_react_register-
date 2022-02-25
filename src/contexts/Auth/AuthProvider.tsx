import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../models/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();
  const [user, setUser] = useState<User | null>(null);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data.userEmail && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
