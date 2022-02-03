import React from "react";
import Image from "next/image";
import Button from "../atoms/button";
import styled from "@emotion/styled";

// image link:
// https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80

const StyledImage = styled(Image)`
	border-radius: 100px;
`;

const A = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};
const B = styled(A)`
	background: pink;
`;

const exercises = [
	{
		id: "Clown",
		name: "Clown",
		description: "This is a clown exercise",
		duration: "5min", // 5 minutes -> 5*60*1000
	},
	{
		id: "Fixpoint",
		name: "Fixpoint",
		description: "This is a Fixpoint exercise",
		duration: "10min", // 10 minutes -> 10*60*1000
	},
];

const Page = () => {
	return (
		<B>
			<StyledImage
				src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
				//src="/../public/red-curtain.jpg"
				alt="This is a placeholder for an awesome image"
				width={800}
				height={500}
				layout="fixed"
			/>
			<Button>Mime Workout</Button>
			<ul>
				{exercises.map(exercise => {
					return (
						<li key={exercise.id}>
							<h2>{exercise.name}</h2>
							<p>{exercise.description}</p>
						</li>
					);
				})}
			</ul>
		</B>
	);
};

export default Page;
