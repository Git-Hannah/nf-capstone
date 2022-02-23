import React from "react";
import CardExercise from "../../molecules/card-exercise";
import useGet from "../../ions/hooks/fetch/get";
import { endpoints } from "../../ions/endpoints";
import { Grid } from "@contour/react";

const CardWorkout = () => {
	const { data } = useGet(endpoints.exercises);
	return (
		<div className="a-class">
			<Grid strategy="grid" colCount={{ xs: 1, s: 1, m: 2, l: 3, xl: 3 }}>
				{data?.map(exercise => {
					console.log(exercise);
					return <CardExercise key={exercise._id} {...exercise} />;
				})}
			</Grid>
		</div>
	);
};

export default CardWorkout;
