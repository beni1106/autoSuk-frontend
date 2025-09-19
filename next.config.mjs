/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)", // semua route
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "ALLOW-FROM https://domain-cpanelmu.com",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors 'self' https://domain-cpanelmu.com",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
