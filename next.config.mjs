/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)", // semua route
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "ALLOW-FROM https://basspreneur.com",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors 'self' https://basspreneur.com",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
