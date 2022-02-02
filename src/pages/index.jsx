import React from "react";
import Image from "next/image";

// image link:
// https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80

const Page = () => {

	return (
		<div>
			<Image 
				src="/"
				alt="This is a placeholder"
				width={500}
				height={500}
			/>
			

		</div>
	);
};

export default Page;
