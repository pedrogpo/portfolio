/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  },
}

module.exports = nextConfig
