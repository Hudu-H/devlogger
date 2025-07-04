import express from 'express';
import { createLog, updateLog, getLogs, deleteLog } from '../controllers/logController.js';

const router = express.Router();

// Get all logs, Create a new log
router.route('/').get(getLogs).post(createLog);

// Update, Delete a log by ID
router.route('/:id').put(updateLog).delete(deleteLog);

export default router;
