import React from "react";

// note(roy): i used kebab naming because pascal is reserved
// for react component

// note(roy): can be primitive, but usually an object
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
