/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  // Ensure images from external sources are allowed
  images: {
    domains: ['placeholder.com'],
  },
}

module.exports = nextConfig