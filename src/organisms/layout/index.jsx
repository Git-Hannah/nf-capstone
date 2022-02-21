import React from "react";
import Footer from "../footer";
import Header from "../header";
import NavBar from "../../molecules/navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<NavBar />
			<Footer />
		</>
	);
};

export default Layout;
