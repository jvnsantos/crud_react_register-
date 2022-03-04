import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../models/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();
  const [user, setUser] = useState<User | null>(null);
  const [useToken, setUseToken] = useState<any>("");


  // AJUSTAR ESSE TRECHO
  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUseToken(data.token);
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [useToken]);

    // AJUSTAR ESSE TRECHO

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    console.log("signout está sendo executada.");
    setUser(null);
    setToken("");
    await api.logout(user?.email!);
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
