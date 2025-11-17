import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Either allow specific domain(s)
    domains: ['raw.githubusercontent.com'],
  },
};

export default nextConfig;
