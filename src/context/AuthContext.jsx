
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const salvo = localStorage.getItem("logado");
    if (salvo) setUsuario(salvo);
  }, []);

  const login = (nomeUsuario) => {
    localStorage.setItem("logado", nomeUsuario);
    setUsuario(nomeUsuario);
  };

  const logout = () => {
    localStorage.removeItem("logado");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
