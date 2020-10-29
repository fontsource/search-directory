const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    entry: ['./src/js/index.js'],
    mode: env,
    output: {
      filename: '[name]-[contentHash].js',
      path: path.resolve(__dirname, './build'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png)$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin.CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        inject: 'body',
        favicon: './src/favicon.png',
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  };
};
