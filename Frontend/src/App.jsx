import { Routes, Route } from 'react-router-dom';

// internal imports
import { PrivateRoute } from './components/PrivateRoute';
import { Dashboard, Login, Register } from '.';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<PrivateRoute />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
