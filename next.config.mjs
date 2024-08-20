/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/not-found",
        permanent: false,
      },
    ];
  },
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
