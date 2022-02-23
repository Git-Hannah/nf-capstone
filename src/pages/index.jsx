import React from "react";
import Image from "next/image";
import Button from "../atoms/button";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

// This is the style for the image
const StyledImage = styled(Image)`
	margin: auto;
	box-shadow: 0 0 0 2px red;
	object-fit: contain;
	object-position: center;
	border-radius: 100px;
`;
// This is the starting component
const WholePage = ({ children, className }) => {
	return <div className={className}>{children}</div>; // The div listens to the props of WholePage
};
// This is the end component which is the starting component + the style attributes
// WholePage is passed down to StyledWholePage
const StyledWholePage = styled(WholePage)`
	background: red;
`;

// The combined component styles the StyledWholePage tag, The StyledImage styles the image
const Page = () => {
	const router = useRouter();
	return (
		<StyledWholePage>
			<StyledImage
				src="https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80"
				alt="Expressive Hands in a spotlight in black and white"
				width={800}
				height={500}
				layout="responsive"
			/>
			<Button onClick={() => router.push("/workout-overview")}>Mime Workout</Button>
		</StyledWholePage>
	);
};

export default Page;
