/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages

  trailingSlash: true, // Required for static hosting to ensure folder structure

  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },

  reactStrictMode: true, // Still good to keep

  env: {
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },

  // Optional: If your GitHub Pages repo is hosted under a subpath (e.g. /portfolio/)
  // Add your basePath and assetPrefix below:
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name",
};

export default nextConfig;
