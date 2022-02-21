import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import CardWorkout from "../../molecules/card-workout";
import { Box, Grid } from "@mui/material";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Workout Overview</title>
				<meta key="description" name="description" content="Workout Overview" />
			</Head>
			<h1>Workout Overview</h1>

			<Box display="flex" justifyContent="center">
				<Grid strategy="grid" colCount={{ s: 2, m: 2, l: 4, xl: 4 }}>
					<CardWorkout />
				</Grid>
			</Box>
		</Layout>
	);
};

export default Page;
