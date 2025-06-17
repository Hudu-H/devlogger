// auth
export const isAuthenticated = () => {
	return !!localStorage.getItem('token');
};

// logout
export const logout = () => {
	localStorage.removeItem('token');
};
