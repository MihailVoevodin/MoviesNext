/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kinopoiskapiunofficial.tech',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
