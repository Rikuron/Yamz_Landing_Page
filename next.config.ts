import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['swiper', 'swiper/react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
