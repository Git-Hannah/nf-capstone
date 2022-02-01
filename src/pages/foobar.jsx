import React from "react";
import Link from "next/link";

const Page = () => {
	return (
		<div>
			<h2>Foobar</h2>
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	);
};

export default Page;
