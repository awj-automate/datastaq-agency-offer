/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'datastaqai.com',
      },
    ],
  },
};

export default nextConfig;
