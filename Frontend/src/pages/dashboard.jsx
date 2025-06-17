import { useState, useEffect } from 'react';

// internal imports
import API from '../services/api';

function Dashboard() {
	const [logs, setLogs] = useState([]);

	// fetch logs
	useEffect(() => {
		const fetchLogs = async () => {
			const res = await API.get('/logs');
			setLogs(res.data);
		};

		fetchLogs();
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold">Dashboard</h1>
			<ul>
				{logs.map((log) => (
					<li key={log._id}>{log.title}</li>
				))}
			</ul>
		</div>
	);
}

export default Dashboard;
