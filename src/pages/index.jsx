import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

// This is the style for the image
const StyledImage = styled(Image)`
	object-fit: cover;
	object-position: 50% 50%;
`;
// This is the starting component
const WholePage = ({ children, className }) => {
	return <div className={className}>{children}</div>; // The div listens to the props of WholePage
};
// This is the end component which is the starting component + the style attributes
// WholePage is passed down to StyledWholePage
const StyledWholePage = styled(WholePage)`
	background: black;
`;

// The combined component styles the StyledWholePage tag, The StyledImage styles the image
const Page = () => {
	return (
		<StyledWholePage>
			<StyledImage
				src="/images/hands.jpg"
				//src="https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80"
				alt="Expressive Hands in a spotlight in black and white"
				layout="fill"
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					pb: 5,
					px: 3,
				}}
			>
				<Link passHref href="/workout-overview">
					<Button
						variant="contained"
						sx={{
							px: 3,
							minWidth: 200,
							backgroundColor: "#fff",
							color: "#000",
						}}
					>
						Mime
					</Button>
				</Link>
			</Box>
		</StyledWholePage>
	);
};

export default Page;
