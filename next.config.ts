import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan linting saat build
  },
};

export default nextConfig;
