// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['react-icons']
  }
}

module.exports = nextConfig
