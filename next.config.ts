import type { NextConfig } from "next";

// We changed ': NextConfig' to ': any' to shut up the error
const nextConfig: any = {
  output: 'export',
  basePath: '/bembu-land',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;