import React, { useState, useEffect } from "react";

// note(roy): i used kebab naming because pascal is reserved
// for react component

// note(roy): can be primitive, but usually an object
const AuthContext = React.createContext({
  isLoggedIn: false,

  // can use dummy for ide auto-completion
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// why create AuthContextProvider? to encapsulate state management!
// in this eg, isLoggedIn
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
