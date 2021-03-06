import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import CardWorkout from "../../organisms/card-workout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Workout Overview</title>
				<meta key="description" name="description" content="Workout Overview" />
			</Head>
			<CardWorkout />
		</Layout>
	);
};

export default Page;
