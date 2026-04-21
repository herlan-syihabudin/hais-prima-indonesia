import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  output: "standalone",
};

export default nextConfig;
