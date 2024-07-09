/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "canicode.storage.iran.liara.space",
        port: "",
      },
    ],
  },
};

export default nextConfig;
