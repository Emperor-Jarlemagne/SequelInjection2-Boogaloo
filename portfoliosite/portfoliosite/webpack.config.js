const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config
}