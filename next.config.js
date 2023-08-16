const { join } = require('path');
const { ProvidePlugin } = require('webpack');

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    CURRENCY: process.env.CURRENCY,
  },
  webpack: (config) => {
    config.plugins.push(
      new ProvidePlugin({
        React: 'react',
      }),
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': join(__dirname, './pages'),
      '@containers': join(__dirname, './containers'),
      '@icon': join(__dirname, './public/Icon'),
      '@image': join(__dirname, './public/images'),
      '@api': join(__dirname, './src/api'),
      '@base': join(__dirname, './src/base'),
      '@components': join(__dirname, './src/components'),
      '@hooks': join(__dirname, './src/hooks'),
      '@redux': join(__dirname, './src/redux'),
      '@type': join(__dirname, './src/types'),
      '@utils': join(__dirname, './src/utils'),
      '@validation': join(__dirname, './src/validation'),
    };

    return config;
  },
});

module.exports = nextConfig;
