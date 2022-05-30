// import React, { useState, useContext } from 'react';

// const AuthContext = React.createContext({
// 	isLogginIn: false,
// 	token: '',
// 	login(token) {},
// 	logout() {},
// }) 

// const AuthContextProvider = (props) => {
// 	const isLogginInUser = !!token
// 	const loginHandler = (token) => {
// 			localStorage.setItem('token', token);
// 			isLogginIn = true;
// 	}

// 	const logoutHandler = () => {
// 		localStorage.removeItem('token');
// 		isLoggedIn = false;
// 	}

// 	const contextValue = {
// 		isLogginIn: isLogginInUser,
// 		token: token,
// 		login: loginHandler,
// 		logout: logoutHandler
// 	}
// 	return <AuthContext.Provider value={contextValue}>
// 		{props.children}
// 	</AuthContext.Provider>
// }	
// export default AuthContextProvider;