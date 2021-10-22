module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/program/construct-3', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
