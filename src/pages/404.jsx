import React from "react";
import Image from "next/image";

const Page = () => {
	return (
		<div>

			<Image
				src="https://http.cat/404"
				alt="404 Page with a half hidden cat with the title 'Not found'"
				width={800}
				height={500}
				layout="responsive"
			/>
		</div>
	);
};

export default Page;
