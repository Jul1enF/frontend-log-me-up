/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
