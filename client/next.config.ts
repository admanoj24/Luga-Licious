/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com", "res.cloudinary.com", "localhost"], // Add all your image hosts here
  },
};

module.exports = nextConfig;
