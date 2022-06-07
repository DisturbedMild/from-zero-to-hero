import React, { useState } from "react";

const AuthContext = React.createContext({
  isLogginIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
	const token = localStorage.getItem("token");
	return token
}

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken();
	let initToken;

	if(tokenData) {
		initToken = tokenData;
	}
  const [token, setToken] = useState(initToken);

  const isLogginInUser = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
		setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    isLogginIn: isLogginInUser,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
