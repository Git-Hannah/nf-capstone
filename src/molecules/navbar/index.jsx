import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FestivalIcon from "@mui/icons-material/Festival";
//import AttractionsIcon from "@mui/icons-material/Attractions";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PanToolIcon from "@mui/icons-material/PanTool";
//import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const NavBar = () => {
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
			<BottomNavigationAction label="Home" value="homr" icon={<FestivalIcon />} />
			<BottomNavigationAction label="Workout" value="workout" icon={<PanToolIcon />} />
			<BottomNavigationAction label="Favorites" value="favorites" icon={<TagFacesIcon />} />
			<BottomNavigationAction label="Wiki" value="wiki" icon={<LocalLibraryIcon />} />
		</BottomNavigation>
	);
};

export default NavBar;
