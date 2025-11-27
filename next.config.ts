import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  outputFileTracingIncludes: {
    '/api/student-downloads/[file]': ['./src/templates/**/*'],
  },
}

export default withNextIntl(nextConfig)
