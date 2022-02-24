import React from "react";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Global, css } from "@emotion/react";

const theme = createTheme({
	palette: {
		primary: {
			main: "#CDDAFD",
		},
		secondary: {
			main: "#C8E8A7",
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
						marginTop: 6,
					},
					"&:nth-child(2)": {
						marginTop: -3,
					},
					"&:nth-child(3)": {
						marginTop: 4,
					},
					"&:nth-child(4)": {
						marginTop: 0,
					},
				},
				label: {
					display: "none",
				},
			},
		},
		MuiCard: {
			defaultProps: {
				// variant: "outlined",
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
						background: "#FDE2E4",
					},
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					height: 20,
					marginTop: 1,
				},
			},
		},
		// PrivateSwitchBase: {
		// 	styleOverrides: {
		// 		root: {
		// 			color: "black",
		// 		},
		// 	},
		// },
	},
});

const globalStyles = (
	<Global
		styles={css`
			#__next {
				display: contents;
			}
		`}
	/>
);

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{globalStyles}
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
};

export default App;
