/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		domains: ["images.unsplash.com", "http.cat"],
	},
};

module.exports = nextConfig;
