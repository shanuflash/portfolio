/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    const devDomain = process.env.NEXT_PUBLIC_WHISPR_DEV_DOMAIN;
    const prodDomain = process.env.NEXT_PUBLIC_WHISPR_DEV_DOMAIN;
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = isDev ? devDomain : prodDomain;

    return [
      {
        source: '/whispr',
        destination: `${baseUrl}/whispr`,
      },
      {
        source: '/whispr/:path*',
        destination: `${baseUrl}/whispr/:path*`,
      },
    ];
  },
};

export default nextConfig;
