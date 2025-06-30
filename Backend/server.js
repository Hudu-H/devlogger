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
app.use(cors());
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
