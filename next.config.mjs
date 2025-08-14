/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '5000',
      pathname: '/api/products/**',
    },
  ],
  unoptimized: true,
},

  experimental: {
    optimizePackageImports: ['@tanstack/react-query'],
  },
}

export default nextConfig
