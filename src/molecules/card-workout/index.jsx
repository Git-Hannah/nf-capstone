import React from "react";
import CardExercise from "../../molecules/card-exercise";
import useGet from "../../ions/hooks/fetch/get";
import { endpoints } from "../../ions/endpoints";
import Stack from "@mui/material/Stack";

const CardWorkout = () => {
	const { data } = useGet(endpoints.exercises);
	return (
		<div className="a-class">
			<Stack spacing={2}>
				{data?.map(exercise => {
					console.log(exercise);
					return <CardExercise key={exercise._id} {...exercise} />;
				})}
			</Stack>
		</div>
	);
};

export default CardWorkout;
