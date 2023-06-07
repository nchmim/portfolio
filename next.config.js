/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
