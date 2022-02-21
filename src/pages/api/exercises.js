import dbConnect from "../../server/mongoose";
import Exercise from "../../server/models/exercise";
import { getSession } from "next-auth/react";

export default async function handler(request, response) {
	const { method, body } = request;
	const session = await getSession({ req: request });
	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const exercises = await Exercise.find({}); /* find all the data in our database */
				console.log(exercises);
				response.status(200).json(exercises);
			} catch (error) {
				response.status(400).json({ success: false });
			}
			break;
		case "POST":
			if (session && session.user.id === process.env.ADMIN_USER_KEY) {
				try {
					const exercise = await Exercise.create(
						body
					); /* create a new model in the database */
					response.status(201).json(exercise);
				} catch (error) {
					response.status(400).json({ success: false });
				}
			} else {
				response.status(401).json({ message: "Unauthorized" });
			}

			break;
		default:
			response.status(400).json({ success: false });
			break;
	}
}
