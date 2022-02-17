import dbConnect from "../../server/mongoose";
import Exercise from "../../server/models/exercise";

export default async function handler(request, response) {
	await dbConnect();
	try {
		const exercises = await Exercise.find({}); /* find all the data in our database */
		console.log(exercises);
		response.status(200).json(exercises);
	} catch (error) {
		response.status(400).json({ success: false });
	}
}
