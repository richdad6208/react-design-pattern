import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
