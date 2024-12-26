import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  cacheMaxMemorySize: 1024 * 1024 * 100,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  compiler:
    process.env.NODE_ENV === 'production' ? { removeConsole: true } : {},
  typescript:
    process.env.NODE_ENV === 'production' ? { ignoreBuildErrors: true } : {},
};

export default nextConfig;
