/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    const devWhisprDomain = process.env.NEXT_PUBLIC_WHISPR_DEV_DOMAIN;
    const prodWhisprDomain = process.env.NEXT_PUBLIC_WHISPR_PROD_DOMAIN;
    const devInvoicezzDomain = process.env.NEXT_PUBLIC_INVOICEZZ_DEV_DOMAIN;
    const prodInvoicezzDomain = process.env.NEXT_PUBLIC_INVOICEZZ_PROD_DOMAIN;
    const isDev = process.env.NODE_ENV === 'development';

    const whisprBaseUrl = isDev ? devWhisprDomain : prodWhisprDomain;
    const invoicezzBaseUrl = isDev ? devInvoicezzDomain : prodInvoicezzDomain;

    return [
      // whispr
      {
        source: '/whispr',
        destination: `${whisprBaseUrl}/whispr`,
      },
      {
        source: '/whispr/:path*',
        destination: `${whisprBaseUrl}/whispr/:path*`,
      },
      // invoicezz
      {
        source: '/invoicezz',
        destination: `${invoicezzBaseUrl}/invoicezz`,
      },
      {
        source: '/invoicezz/:path*',
        destination: `${invoicezzBaseUrl}/invoicezz/:path*`,
      },
    ];
  },
};

export default nextConfig;
