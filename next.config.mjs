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
          // ✅ CSP untuk iframe cross-domain
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://basspreneur.com",
          },
          // ✅ X-Frame-Options
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://basspreneur.com",
          },
          // ✅ Proteksi MIME type
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // ✅ Cache untuk optimasi
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
