import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// internal imports
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Router>
	</React.StrictMode>
);
