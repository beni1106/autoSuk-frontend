/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors 'self' https://basspreneur.com;",
                    },
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
