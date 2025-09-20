/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://basspreneur.com",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://basspreneur.com',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:slug',           // contoh: /cahyo
        destination: '/kontak/:slug', // redirect ke /kontak/cahyo
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
