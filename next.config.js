/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: isProd ? '/portfolio' : '',
  // assetPrefix: isProd ? '/portfolio/' : '',
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true }
}

module.exports = nextConfig
