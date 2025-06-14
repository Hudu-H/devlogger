import { Routes, Route } from 'react-router-dom';

// internal imports
import PrivateRoute from './components/PrivateRoute.jsx';
import { Dashboard, Login, Register } from '.';

function App() {
	return (
		<Routes>
			<h1 className="text-3xl font-bold text-blue-500">Tailwind Test</h1>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<PrivateRoute />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
