import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Tells Next.js to generate static HTML files
  basePath: '/bembu-land', // REPLACE THIS with your repository name
  images: {
    unoptimized: true, // Required for Next.js images on GitHub Pages
  },
};

export default nextConfig;