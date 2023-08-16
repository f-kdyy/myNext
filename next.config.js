module.exports = {
    async rewrites() {
      return [
        {
          // 把 /api 的请求都代理到 http://localhost:4000 上去
          source: '/api/:path*',
          destination: 'http://localhost:9797/api/:path*',
          // permanent: true,
        },
      ]
    },
  }