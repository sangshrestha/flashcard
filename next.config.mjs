/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "development" ? "" : "/flashcard",
  output: "export",
};

export default nextConfig;
