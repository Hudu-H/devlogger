import express from 'express';

// internal imports
import { createLog, updateLog, getLog, deleteLog } from '../controllers/logController.js';

const router = express.Router();

router.route('/').get(getLog).post(createLog);
router.route('/:id').put(updateLog).delete(deleteLog);

export default router;
