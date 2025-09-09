import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // otimiza imagens
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
