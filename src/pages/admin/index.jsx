import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { endpoints } from "../../ions/endpoints";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
	const { data: session } = useSession();
	console.log(session);
	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formValues = Object.fromEntries(formData);
		const response = await axios.post(endpoints.exercises, formValues);
		console.log(response);
		event.target.reset();
	};

	return (
		<Layout>
			<Head>
				<title key="title">Admin</title>
			</Head>
			{session && session.user.id === process.env.ADMIN_USER_KEY ? (
				<div>
					<Image
						src={session.user.image}
						height={200}
						width={200}
						alt={session.user.name}
					/>

					<h2>{session.user.name}</h2>
					<Button
						onClick={() => {
							signOut();
						}}
					>
						Log Out
					</Button>
					<Stack component="form" spacing={2} onSubmit={handleSubmit}>
						<TextField
							required
							name="name"
							label="Name of Exercise"
							variant="outlined"
						/>
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
				</div>
			) : (
				<Button
					startIcon={<GitHubIcon />}
					onClick={() => {
						signIn("github");
					}}
				>
					Log in with GitHub
				</Button>
			)}
		</Layout>
	);
};

export default Page;
