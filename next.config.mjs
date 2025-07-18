/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sedar-images.084c5dde5a50ae0cc379802fbc5fde89.r2.cloudflarestorage.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'imagedelivery.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pub-a8028995ee2643b6af20b884be05be0d.r2.dev',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.sedarshop.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'oci.sedarshop.com',
                port: '',
                pathname: '/**',
            },

        ],
    },
};

export default nextConfig;
