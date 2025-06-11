import express from 'express';

// internal imports
import { createLog, updateLog, getLogs, deleteLog } from '../controllers/logController.js';

const router = express.Router();

router.route('/').get(getLogs).post(createLog);
router.route('/:id').put(updateLog).delete(deleteLog);

export default router;
