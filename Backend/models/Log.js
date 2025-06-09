import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		date: {
			type: Date,
			default: Date.now,
		},
		tags: [String],
		User: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// export model
export default mongoose.model('Log', logSchema);
