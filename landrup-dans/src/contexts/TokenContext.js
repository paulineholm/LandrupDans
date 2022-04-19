import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [userId, setUserId] = useState(Cookies.get("userId"));
  const [role, setRole] = useState(Cookies.get("role"));
  const [user] = useState();
  const [pass] = useState();

  useEffect(() => {
    if (user && pass) {
      axios
        .post("http://localhost:4000/auth/token", {
          username: user,
          password: pass,
        })
        .then((response) => {
          setToken(response.data.token);
          setUserId(response.data.userId);
          setRole(response.data.role);
          Cookies.set("token", response.data.token);
          Cookies.set("userId", response.data.userId);
          Cookies.set("role", response.data.role);
        });
    }
  }, [user, pass]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, userId, setUserId, role, setRole }}
    >
      {children}
    </TokenContext.Provider>
  );
};
export default TokenProvider;
