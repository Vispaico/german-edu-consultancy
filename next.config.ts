const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/student-downloads/[file]": ["./src/templates/**/*"],
    },
  },
}

export default nextConfig
