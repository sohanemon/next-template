// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
  typescript: { ignoreBuildErrors: process.env.NODE_ENV === 'production' },
};

export default nextConfig;
