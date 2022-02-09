const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js',
  },

  // 模式
  mode: 'development',

  // loader, module
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css',
    }),
  ],

  // source map
  devtool: 'source-map',
};
