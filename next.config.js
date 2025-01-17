/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['youtube.com'],
  },
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig; 