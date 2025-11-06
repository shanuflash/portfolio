/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    const devWhisprDomain = process.env.NEXT_PUBLIC_WHISPR_DEV_DOMAIN;
    const prodWhisprDomain = process.env.NEXT_PUBLIC_WHISPR_PROD_DOMAIN;
    const devInvoicezzDomain = process.env.NEXT_PUBLIC_INVOICEZZ_DEV_DOMAIN;
    const prodInvoicezzDomain = process.env.NEXT_PUBLIC_INVOICEZZ_PROD_DOMAIN;
    const devPolyFormDomain = process.env.NEXT_PUBLIC_POLYFORM_DEV_DOMAIN;
    const prodPolyFormDomain = process.env.NEXT_PUBLIC_POLYFORM_PROD_DOMAIN;
    const isDev = process.env.NODE_ENV === 'development';

    const whisprBaseUrl = isDev ? devWhisprDomain : prodWhisprDomain;
    const invoicezzBaseUrl = isDev ? devInvoicezzDomain : prodInvoicezzDomain;
    const polyFormBaseUrl = isDev ? devPolyFormDomain : prodPolyFormDomain;

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
      // polyform
      {
        source: '/polyform',
        destination: `${polyFormBaseUrl}/polyform`,
      },
      {
        source: '/polyform/:path*',
        destination: `${polyFormBaseUrl}/polyform/:path*`,
      },
    ];
  },
};

export default nextConfig;
