import { createContext, useContext, useState } from "react";



const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  shopCart: null,
  setShopCart: () => {},
  suma: null,
  setSuma: () => {},
  wishlisted: [],
  setWishlisted: () => {},
  scope: {
    data: null,
    loader: true,
    error: null,
    cart: [],
  },
  setScope: () => {}
});

export const ContextProvider = ({ children }) => {
  const data = {
    cart: [],
  };
  const object = {
    data: null,
    loader: true,
    error: null,
    cart: [],
  };
  const [scope, setScope] = useState(object);
  const [shopCart, setShopCart] = useState(data);
  const [wishlisted, setWishlisted] = useState([]);
  const [suma, setSuma] = useState(0);
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        shopCart,
        setShopCart,
        suma,
        setSuma,
        wishlisted,
        setWishlisted,
        scope,
        setScope
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
