/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/whispr',
        destination: 'https://chat-whispr.vercel.app/whispr',
      },
      {
        source: '/whispr/:path*',
        destination: 'https://chat-whispr.vercel.app/whispr/:path*',
      },
    ];
  },
};

export default nextConfig;
