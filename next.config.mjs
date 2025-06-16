/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
    autoPrerender: false, // Disable prerender indicator
  },
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "loremflickr.com", 
      },
      {
        protocol: 'https',
        hostname: "s3.us-east-1.amazonaws.com"
      }
    ],
  },
  sassOptions: {
    compiler: "modern",
  },
};

export default nextConfig;