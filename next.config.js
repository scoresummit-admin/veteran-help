/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'images.unsplash.com', 
      'commons.wikimedia.org',
      'www.grandforks.af.mil',
      'www.edwards.af.mil',
      'www.dvidshub.net'
    ],
  },
  trailingSlash: false,
  skipMiddlewareUrlNormalize: false,
  skipTrailingSlashRedirect: false,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig