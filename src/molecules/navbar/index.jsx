import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FestivalIcon from "@mui/icons-material/Festival";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PanToolIcon from "@mui/icons-material/PanTool";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Paper from "@mui/material/Paper";
import Link from "next/link";

const NavBar = () => {
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<BottomNavigation sx={{ visibility: "hidden" }} />
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation value={value} onChange={handleChange}>
					<Link passHref href="/">
						<BottomNavigationAction
							label="Home"
							value="home"
							icon={<FestivalIcon />}
							sx={{
								backgroundColor: "#FAD2E1",
							}}
						/>
					</Link>
					<Link passHref href="/workout-overview">
						<BottomNavigationAction
							label="Workout"
							value="workout"
							icon={<PanToolIcon />}
							sx={{
								backgroundColor: "#FFF1E6",
							}}
						/>
					</Link>
					<Link passHref href="/bookmarks">
						<BottomNavigationAction
							label="Favorites"
							value="favorites"
							icon={<TagFacesIcon />}
							sx={{
								backgroundColor: "#E2ECE9",
								//color: "white",
							}}
						/>
					</Link>
					<Link passHref href="/admin">
						<BottomNavigationAction
							label="Admin"
							value="admin"
							icon={<LocalLibraryIcon />}
							sx={{
								backgroundColor: "#DFE7FD",
								//color: "white",
							}}
						/>
					</Link>
				</BottomNavigation>
			</Paper>
		</>
	);
};

export default NavBar;
