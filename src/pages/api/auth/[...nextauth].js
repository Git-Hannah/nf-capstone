import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../server/adapters/mongodb";

export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),

	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async session({ session, user }) {
			return { ...session, user };
		},
	},
});
