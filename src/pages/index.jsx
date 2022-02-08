import React from "react";
import Image from "next/image";
import Button from "../atoms/button";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

// This is the style for the image
const StyledImage = styled(Image)`
	border-radius: 100px;
`;
// This is the starting component
const WholePage = ({ children, className }) => {
	return <div className={className}>{children}</div>; // The div listens to the props of WholePage
};
// This is the end component which is the starting component + the style attributes
// WholePage is passed down to StyledWholePage
const StyledWholePage = styled(WholePage)`
	background: pink;
`;

// The combined component styles the StyledWholePage tag, The StyledImage styles the image
const Page = () => {
	const router = useRouter();
	return (
		<StyledWholePage>
			<StyledImage
				src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
				//src="/../public/red-curtain.jpg"
				alt="This is a placeholder for an awesome image"
				width={800}
				height={500}
				layout="responsive"
			/>
			<Button onClick={() => router.push("/workout-overview")}>Mime Workout</Button>
		</StyledWholePage>
	);
};

export default Page;
