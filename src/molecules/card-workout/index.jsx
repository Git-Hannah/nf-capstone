import React from "react";
import CardExercise from "../../molecules/card-exercise";
import { exercises } from "../../ions/exercises";

const CardWorkout = () => {
	return (
		<div>
			<ul>
				{exercises.map(exercise => {
					return <CardExercise key={exercise.id} {...exercise} />;
				})}
			</ul>
		</div>
	);
};

export default CardWorkout;
