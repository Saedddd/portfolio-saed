const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  images: {
    domains: [
      'media-exp1.licdn.com',
      'www.nonceblox.com',
      'cdn-edge.kwork.ru',
      'www.google.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.kwork.ru'
      }
    ]
  }
});
