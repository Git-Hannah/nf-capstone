import React from "react";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#888800",
		},
		secondary: {
			main: "#678543",
		},
		background: {
			default: "#eee",
			paper: "white",
		},
	},
	shape: {
		borderRadius: 20,
	},
	components: {
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					justifyContent: "space-evenly",
				},
			},
		},
		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					borderRadius: "50%",
					height: 48,
					width: 48,
					flexGrow: 0,
					padding: 0,
					minWidth: 48,
					minHeight: 48,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"&:nth-child(1)": {
						marginTop: 8,
					},
					"&:nth-child(2)": {
						marginTop: -8,
					},
					"&:nth-child(3)": {
						marginTop: 4,
					},
					"&:nth-child(4)": {
						marginTop: -1,
					},
				},
				label: {
					display: "none",
				},
			},
		},
		MuiCard: {
			defaultProps: {
				raised: false,
				square: true,
				variant: "outlined",
			},
			styleOverrides: {
				root: {
					//background: "orange",
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					//background: "blue",
				},
			},
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					//background: "yellow",
					"& .MuiCheckbox-root": {
						background: "red",
					},
				},
			},
		},
	},
});
const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default App;
