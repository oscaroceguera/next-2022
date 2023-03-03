/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["es", "en-US", "fr"],
    defaultLocale: "es",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
