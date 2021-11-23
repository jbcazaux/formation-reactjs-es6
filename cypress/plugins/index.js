const injectDevServer = require('@cypress/react/plugins/load-webpack')

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}
