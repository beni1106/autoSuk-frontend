/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // /kontak/cahyo -> /kontak?domain=cahyo
      {
        source: "/kontak/:slug",
        destination: "/kontak?domain=:slug",
      },
      // /:domain -> /?domain=:domain
      {
        source: "/:domain",
        destination: "/?domain=:domain",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)", // semua route
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://basspreneur.com",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
