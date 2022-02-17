const data = [
	{
		id: "Fixpoint",
		name: "Fixpoint",
		description:
			"Put your hand on a fixed object like a table or wall, move around it with your body without moving the hand. Notice how your arm moves and looks. Take your hand an inch away from the object, let it hover there and repeat the movements, again without moving the hand. Try with different states of muscle tension!",
		duration: "10min", // 10 minutes -> 10*60*1000
		image: "/images/fixpoint.png",
	},
	{
		id: "Imaginary Object",
		name: "Imaginary Object",
		description:
			"Take a real object, e.g. a glass. Pick it up, and feel the form, weight and temperature. Put it down, and pick up an imaginary glass. Form the glass with your hand with the attributes from your memory!",
		duration: 180000, // 3min
		image: "/images/imaginary-object.png",
	},
	{
		id: "Walking on the spot",
		name: "Walking on the spot",
		description:
			"1. Walk backwards, starting from the tip of your foot, use the full range of movement 2. Everytime you put your toe on the ground, hold your balance here for a moment, the other foot in the air 3. The foot that is going forward while walking backwards can now be redirected to go backwards, while keeping the exact same sequence of movement 4. Now everytime your toe comes to the ground, place it on the same spot every time 5. Mime walk on the spot!",
		duration: 600000, // 10min
		image: "/images/walking-on-the-spot.png",
	},
	{
		id: "Clown",
		name: "Clown",
		description:
			"Scratch your nose to feel it, then imagine your nose has an eye which wants to see everything first. Explore your surroundings, leading with your nose!",
		duration: "5min", // 5 minutes -> 5*60*1000
		image: "/images/clown.png",
	},
];

const handler = (request, response) => {
	response.status(200).json(data);
};
export default handler;
