import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const [form, setForm] = useState({ name: '', email: '', password: '' });
	const navigate = useNavigate();

	// handle form change
	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	// handle submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:5000/api/auth/register', form);
			localStorage.setItem('token', res.data.token);
			navigate('/dashboard');
		} catch (err) {
			alert('Registration failed', err);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
			<input name="name" onChange={handleChange} placeholder="Name" className="w-full p-2 border" />
			<input
				name="email"
				onChange={handleChange}
				placeholder="Email"
				className="w-full p-2 border"
			/>
			<input
				name="password"
				onChange={handleChange}
				placeholder="Password"
				type="password"
				className="w-full p-2 border"
			/>
			<button className="w-full bg-green-500 text-white p-2">Register</button>
		</form>
	);
}
