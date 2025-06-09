import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// internal imports
import User from '../models/User.js';

// register user
export const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userExists = await User.findOne({ email });
		if (userExists) return res.status(400).json({ message: 'User already exists' });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// create user
		const user = await User.create({ name, email, password: hashedPassword });
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

		res.status(201).json({ id: user._id, name: user.name, email: user.email, token });
	} catch (error) {
		res.staus(500).json({ message: 'server error' });
	}
};

// login user
export const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: 'Sorry, can not find user.' });

		// if user matches
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ message: 'invalid credentials, try again.' });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

		res.json({ id: user._id, name: user.name, email: user.email, token });
	} catch (error) {
		res.status(500).json({ message: 'server error' });
	}
};
