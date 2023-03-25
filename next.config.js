/** @type {import('next').NextConfig} */
const nextConfig = {
  
  experimental: {
    appDir: true,
  },
  images:{
    domains:['colorlib.com','cdn.sanity.io'],
    formats: ["image/webp"],
  }
}

module.exports = nextConfig
