import express from 'express';

// internal imports
import { signupUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// register a user route
router.post('/signup', signupUser);

//login route
router.post('/login', loginUser);
export default router;
