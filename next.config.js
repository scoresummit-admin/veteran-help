/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'commons.wikimedia.org'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig