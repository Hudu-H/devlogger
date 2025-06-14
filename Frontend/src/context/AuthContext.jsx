import { useState, createContext } from 'react';
import jwt from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const token = localStorage.getItem('token');
		return token ? jwt(token) : null;
	});

	// login
	const login = (token) => {
		localStorage.setItem('token', token);
		setUser(jwt(token));
	};

	// logout
	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
