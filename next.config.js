/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: cha'/portfolio/' : '',
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true }
}

module.exports = nextConfig
