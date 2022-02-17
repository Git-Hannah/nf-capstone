import React from "react";
import useStore from "../../ions/hooks/store/useStore";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
//import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const FavoriteIcon = ({ bookmarked, index }) => {
	
	return (
		<Checkbox
			checked={bookmarked ? bookmarked : false}
			icon={<StarBorderIcon />}
			checkedIcon={<StarIcon />}
			inputProps={{ "aria-label": "controlled" }}
		/>
	);
};

export default FavoriteIcon;
