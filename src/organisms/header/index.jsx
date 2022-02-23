import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";

const Header = () => {
	return (
		<AppBar position="fixed" color="primary">
			<Toolbar>
				<h2>Express your silence</h2>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
