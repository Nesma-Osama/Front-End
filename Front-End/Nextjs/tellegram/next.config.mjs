/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
                port: '', // Leave empty for default (no port)
                pathname: '/**', // Allow all paths
            },
            {
                protocol: 'http',
                hostname: 'robohash.org',
                port: '', // Leave empty for default (no port)
                pathname: '/**', // Allow all paths
            },
        ],
    },
    async rewrites() {
        return [{ source: "/:path*", destination: "http://localhost:4000/:path*" }]
    }
};

export default nextConfig;
