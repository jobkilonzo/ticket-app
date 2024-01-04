/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: [
                'localhost:3000',
                'our-own-url.something.com',
                'nice.checkplus.co.kr', // url from third party
            ],
            allowedForwardedHosts: [
                'localhost:3000',
                'our-own-url.something.com',
                'nice.checkplus.co.kr', // url from third party
            ],
        },
    },
}

module.exports = nextConfig
