import type { NextConfig } from "next";

const nextConfig = {
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/healthcare-clockin", // Change this to your repo name
  assetPrefix: "/healthcare-clockin/",
};

module.exports = nextConfig;
