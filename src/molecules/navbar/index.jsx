import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FestivalIcon from "@mui/icons-material/Festival";
//import AttractionsIcon from "@mui/icons-material/Attractions";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PanToolIcon from "@mui/icons-material/PanTool";
//import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";

const NavBar = () => {
	const [value, setValue] = React.useState("recents");
	const router = useRouter();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<BottomNavigation />
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation value={value} onChange={handleChange}>
					<BottomNavigationAction
						label="Home"
						value="home"
						icon={<FestivalIcon />}
						sx={{
							backgroundColor: "#FAD2E1",
						}}
						onClick={() => router.push("/")}
					/>
					<BottomNavigationAction
						label="Workout"
						value="workout"
						icon={<PanToolIcon />}
						sx={{
							backgroundColor: "#FFF1E6",
						}}
						onClick={() => router.push("/workout-overview")}
					/>
					<BottomNavigationAction
						label="Favorites"
						value="favorites"
						icon={<TagFacesIcon />}
						sx={{
							backgroundColor: "#E2ECE9",
							//color: "white",
						}}
						onClick={() => router.push("/bookmarks")}
					/>
					<BottomNavigationAction
						label="Wiki"
						value="wiki"
						icon={<LocalLibraryIcon />}
						sx={{
							backgroundColor: "#DFE7FD",
							//color: "white",
						}}
						onClick={() => router.push("/")}
					/>
				</BottomNavigation>
			</Paper>
		</>
	);
};

export default NavBar;
