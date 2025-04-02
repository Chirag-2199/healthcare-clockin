import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/healthcare-clockin", // Change this to your repo name
  assetPrefix: "/healthcare-clockin/",
};

module.exports = nextConfig;
