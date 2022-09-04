const { defineConfig } = require('cypress')
const webpackConfig = require('../webpack.config.js')

module.exports = defineConfig({
  viewportWidth: 1480,
  viewportHeight: 768,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
  },
})
