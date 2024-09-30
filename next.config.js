/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
