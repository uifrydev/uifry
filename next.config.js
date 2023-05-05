/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  // next
  images: {
    domains: ["colorlib.com", "cdn.sanity.io"],
    formats: ["image/webp"],
  },
});
module.exports = nextConfig;
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//   },
//   images: {
//     domains: ["colorlib.com", "cdn.sanity.io"],
//     formats: ["image/webp"],
//   },
// });
