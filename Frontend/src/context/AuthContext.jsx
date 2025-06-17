import { useState, createContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const token = localStorage.getItem('token');
		return token ? jwtDecode(token) : null;
	});

	// login
	const login = (token) => {
		localStorage.setItem('token', token);
		setUser(jwtDecode(token));
	};

	// logout
	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
