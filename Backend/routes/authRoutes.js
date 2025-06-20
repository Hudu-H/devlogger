import express from 'express';

// internal imports
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// register a user route
router.post('/register', registerUser);

//login route
router.post('/login', loginUser);
export default router;
