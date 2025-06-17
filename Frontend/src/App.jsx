import { Routes, Route, Navigate } from 'react-router-dom';

// internal imports
import PrivateRoute from './components/PrivateRoute.jsx';
import { Dashboard, Login, Register } from '.';
import { isAuthenticated } from './services/auth.js';

function App() {
	return (
		<Routes>
			<Route path="/" element={isAuthenticated() ? <Navigate to="/Dashboard" /> : <Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<PrivateRoute />}>
				<Route
					path="/dashboard"
					element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
