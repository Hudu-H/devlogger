import axios from 'axios';

// create base URL
const API = axios.create({
	baseURL: 'http://localhost:5000/api/auth',
});

API.interceptors.request.use((req) => {
	const token = localStorage.getItem('token');
	if (token) req.headers['authorization'] = `Bearer ${token}`;

	return req;
});

export default API;
