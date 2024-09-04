/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  webpack(config) {
    // Customize Webpack configuration
    return config;
  },
  env: {
    SITE_NAME: 'Eternal Elegance Emporium',
    PRIMARY_COLOR: '#B8860B',
    SECONDARY_COLOR: '#f4e8cd',
    TEXT_COLOR: '#4B3621',
  },
};

module.exports = nextConfig;
