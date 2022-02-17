import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Page = () => {
	const handleSubmit = event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formValues = Object.fromEntries(formData);
		console.log(formValues);
		event.target.reset();
	};
	return (
		<Layout>
			<Head>
				<title key="title">Admin</title>
			</Head>
			<Stack component="form" spacing={2} onSubmit={handleSubmit}>
				<TextField required name="name" label="Name of Exercise" variant="outlined" />
				<TextField
					required
					multiline
					name="description"
					label="Description"
					variant="outlined"
					InputProps={{
						sx: { fontFamily: "monospace" },
					}}
				/>
				<TextField
					required
					name="duration"
					type="number"
					label="Duration"
					variant="outlined"
				/>
				<TextField required name="image" label="Image" variant="outlined" />
				<Button type="submit">Create</Button>
			</Stack>
		</Layout>
	);
};

export default Page;
