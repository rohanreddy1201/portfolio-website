/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // REMOVE THIS LINE:
  // output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true, // keep if not using next/image optimization
  },

  env: {
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }
};

export default nextConfig;
