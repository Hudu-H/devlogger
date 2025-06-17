import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
	const [form, setForm] = useState({ email: '', password: '' });
	const navigate = useNavigate();

	// handleChange
	function handleChange(e) {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	// handleSubmit
	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const res = await axios.post('http://localhost:5000/api/auth/login', form);
			localStorage.setItem('token', res.data.token);
			navigate('/dashboard');
		} catch (error) {
			alert('login failed, try again', error);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
			<input type="email" onChange={handleChange} placeholder="" className="w-full" p-2 border />
			<input
				type="password"
				onChange={handleChange}
				placeholder="password"
				className="w-full"
				p-2
				border
			/>
			<button className="w-full bg-blue-500 text-white p-2">Login</button>
		</form>
	);
}

export default Login;
