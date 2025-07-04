import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// internal imports
import authRoutes from './routes/authRoutes.js';
import logRoutes from './routes/logRoutes.js';
import { protect } from './middleware/auth.js';

dotenv.config();
const app = express();

const allowedOrigins = ['http://localhost:5173'];
app.use(
	cors({
		origin: allowedOrigins,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
		optionsSuccessStatus: 200,
	})
);

app.use(express.json());

// connect to mongodb
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log('DB connnected'))
	.catch((err) => console.error(err));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/logs', protect, logRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
