import React from "react";
import Head from "next/head";
import CardExercise from "../../molecules/card-exercise";
import Layout from "../../organisms/layout";
import useStore from "../../ions/hooks/store/useStore";
import { Grid } from "@contour/react";

import useGet from "../../ions/hooks/fetch/get";
import { endpoints } from "../../ions/endpoints";

const Page = () => {
	const { data } = useGet(endpoints.exercises);
	const meta = useStore(state => state.meta);

	return (
		<Layout>
			<Head>
				<title key="title">Bookmarks</title>
			</Head>
			<h1>Bookmarks</h1>
			<Grid strategy="grid" align="start" colCount={{ xs: 1, s: 1, m: 2, l: 3, xl: 3 }}>
				{data
					?.filter(exercise => Boolean(meta[exercise._id]?.checked))
					.map((exercise, index) => {
						return <CardExercise key={exercise._id} index={index} {...exercise} />;
					})}
			</Grid>
		</Layout>
	);
};

export default Page;
