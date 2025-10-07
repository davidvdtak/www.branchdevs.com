/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "loremflickr.com", 
      },
      {
        protocol: 'https',
        hostname: "s3.us-east-1.amazonaws.com"
      },
      {
        protocol: 'https',
        hostname: "branchdevs.com"
      }
    ],
  },
  output: 'export',
};

export default nextConfig;