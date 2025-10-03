/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/kontak/:slug",
        destination: "/kontak?domain=:slug", // /kontak/cahyo -> /kontak?domain=cahyo
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://basspreneur.com",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://basspreneur.com",
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
