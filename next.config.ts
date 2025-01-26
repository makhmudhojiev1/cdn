import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "as1.ftcdn.net",
      },
    ],
  },
};

export default nextConfig;
