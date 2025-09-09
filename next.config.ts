import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // otimiza imagens
  },
  reactStrictMode: true,
  optimizeCss: true, // garante otimização do CSS
  experimental: {
    optimizeCss: true, // força uso do critters no App Router também
  },
};

export default nextConfig;
