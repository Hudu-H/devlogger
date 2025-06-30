import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//internal imports
import API from '../services/api';

export default function SignUp() {
	const [form, setForm] = useState({ name: '', email: '', password: '' });
	const navigate = useNavigate();

	// handle form change
	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	// handle submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await API.post('/auth/signup', form);
			localStorage.setItem('token', res.data.token);
			navigate('/dashboard');
		} catch (err) {
			alert('Signup failed: ' + (err.response?.data?.message || err.message));
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-sm mx-auto mt-20 w-[400px] space-y-6 flex items-center justify-center min-h-screen flex-col"
		>
			<input
				name="name"
				onChange={handleChange}
				placeholder="Name"
				className="w-full p-8 border m-4"
			/>
			<input
				name="email"
				onChange={handleChange}
				placeholder="Email"
				className="w-full p-2 border m-6"
			/>
			<input
				name="password"
				onChange={handleChange}
				placeholder="Password"
				type="password"
				className="w-full p-2 border"
			/>
			<button className="w-full bg-green-500 text-white p-2">Sign Up</button>
		</form>
	);
}
