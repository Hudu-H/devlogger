import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// internal imports
import authRoutes from './routes/authRoutes.js';
import logRoutes from './routes/logRoutes.js';
import { protect } from './middleware/auth.js';

const app = express();

// CORS from frontend origin
const allowedOrigins = ['http://localhost:5173'];
app.use(
	cors({
		origin: allowedOrigins, // Your frontend origin
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true, // auth headers
	})
);

app.use(express.json());

// connect to database
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log('DB connnected'))
	.catch((err) => console.error(err));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/logs', protect, logRoutes);

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
