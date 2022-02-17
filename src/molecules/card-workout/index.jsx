import React from "react";
import CardExercise from "../../molecules/card-exercise";
import useGet from "../../ions/hooks/fetch/get";
import Stack from "@mui/material/Stack";

const CardWorkout = () => {
	const { data } = useGet("/api/exercises");
	return (
		<div>
			<Stack spacing={2}>
				{data?.map(exercise => {
					return <CardExercise key={exercise.id} {...exercise} />;
				})}
			</Stack>
		</div>
	);
};

export default CardWorkout;
