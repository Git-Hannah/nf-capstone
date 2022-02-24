require("dotenv").config;
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		ADMIN_USER_KEY: process.env.ADMIN_USER_KEY,
	},
	images: {
		domains: ["images.unsplash.com", "http.cat", "avatars.githubusercontent.com"],
	},
};

module.exports = nextConfig;
