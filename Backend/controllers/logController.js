import Log from '../models/Log.js';

// get logs
export const getLogs = async (req, res) => {
	try {
		const logs = await Log.find({ user: req.user.id });

		res.json(logs);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

// create logs
export const createLog = async (req, res) => {
	const { title, description, tags } = req.body;

	try {
		const log = await Log.create({ title, description, tags, user: req.user.id });
		res.status(201).json(log);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

// update log
export const updateLog = async (req, res) => {
	try {
		const log = await Log.findById(req.params.id);
		// if log not found
		if (!log || log.user.toString() !== req.user.id) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		// update log
		const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(updatedLog);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

// delete log
export const deletLog = async (req, res) => {
	try {
		const log = await Log.findById(req.params.id);

		// if log not found
		if (!log || log.user.toString() !== req.user.id) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		await log.deleteOne();
		res.json({ message: 'Log deleted' });
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};
