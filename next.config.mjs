/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "canicode-app.storage.iran.liara.space",
        port: "",
      },
    ],
  },
};

export default nextConfig;
