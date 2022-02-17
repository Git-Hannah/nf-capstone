import mongoose from "mongoose";

/* ExerciseSchema will correspond to a collection in your MongoDB database. */
const ExerciseSchema = new mongoose.Schema({
	name: String,
	description: String,
	duration: Number,
	image: String,
});

export default mongoose.models.Exercise || mongoose.model("Exercise", ExerciseSchema);
