// import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// // internal imports
// import { AuthContext } from '../context/AuthContext';

// // sign up page
// function SignUp() {
// 	const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// 	const { login } = useContext(AuthContext);
// 	const navigate = useNavigate();

// 	//handle change
// 	function handleChange(e) {
// 		setFormData((prev) => ({
// 			...prev,
// 			[e.target.name]: e.target.value,
// 		}));
// 	}

// 	// handle submit
// 	async function handleSubmit(e) {
// 		e.preventDefault();

// 		try {
// 			const res = await fetch('/api/auth/register', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(formData),
// 			});
// 			const data = await res.json();

// 			if (res.ok) {
// 				login(data);
// 				navigate('/dashboard');
// 			} else {
// 				alert(data.message || 'Sign Up failed, Please try again.');
// 			}
// 		} catch (err) {
// 			alert('SignUp error', err);
// 		}
// 	}

// 	return (
// 		<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
// 			<input
// 				name="name"
// 				value={formData.name}
// 				onChange={handleChange}
// 				placeholder="Name"
// 				required
// 			/>
// 			<input
// 				name="email"
// 				type="email"
// 				value={formData.email}
// 				onChange={handleChange}
// 				placeholder="Email"
// 				required
// 			/>
// 			<input
// 				name="password"
// 				type="password"
// 				value={formData.password}
// 				onChange={handleChange}
// 				placeholder="Password"
// 				required
// 			/>
// 			<button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
// 				Sign Up
// 			</button>
// 		</form>
// 	);
// }
