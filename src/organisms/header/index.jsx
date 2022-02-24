import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useRouter } from "next/router";

const headlines = {
	"/bookmarks": "Bookmarks",
	"/workout-overview": "Workouts",
	default: "Mime",
};
const Header = () => {
	const { asPath } = useRouter();
	console.log(asPath);

	return (
		<AppBar position="fixed" color="primary">
			<Toolbar>
				<Typography variant="h5" component="h1">
					{headlines[asPath] ?? headlines.default}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
