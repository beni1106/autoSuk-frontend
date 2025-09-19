/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)", // semua route
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "ALLOWALL", // biar bisa di-iframe dari mana saja
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors *", // boleh semua domain
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
