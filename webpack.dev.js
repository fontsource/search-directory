const WebpackMerge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = WebpackMerge(common, {
  mode: 'development',
});
