const path = require('path');

/*
 * Plugins
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Env
 */

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const isBuild = process.env.NODE_MODE === 'build';

/**
 * Paths
 */

const favicon = path.resolve(__dirname, 'src/assets/icons/favicon.ico');

/**
 * CopyPlugin patterns
 */

const appleIconPattern = {
  from: path.resolve(__dirname, 'src/assets/icons/logo192.png'),
  to: path.resolve(__dirname, 'dist/logo192.png'),
};

/**
 * Aliases
 */

const aliases = {
  '@': path.resolve(__dirname, 'src'),
  '@assets': path.resolve(__dirname, 'src/assets'),
  '@buttons': path.resolve(__dirname, 'src/buttons'),
  '@lib': path.resolve(__dirname, 'src/lib'),
  '@modal': path.resolve(__dirname, 'src/modal'),
  '@redux': path.resolve(__dirname, 'src/redux'),
  '@sections': path.resolve(__dirname, 'src/sections'),
  '@sidebar': path.resolve(__dirname, 'src/sidebar'),
  '@subcomponents': path.resolve(__dirname, 'src/subcomponents'),
  '@googlemap': path.resolve(__dirname, 'src/googlemap'),
};

/**
 * Rules
 */

const css = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reload: true },
    },
    'css-loader',
  ],
};

const scss = {
  test: /\.s[ac]ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reload: true },
    },
    'css-loader',
    'sass-loader',
  ],
};

const images = {
  test: /\.(png|jpg|svg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: '[name].[ext]', outputPath: 'assets/images/' },
    },
  ],
};

const fonts = {
  test: /\.(ttf|woff|woff2|eot)$/,
  use: ['file-loader'],
};

const js = () => {
  const use = [];

  use.push('babel-loader');

  if (isDev) use.push('eslint-loader');

  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use,
  };
};

const html = {
  test: /\.html$/,
  use: ['html-loader'],
};

/**
 * Config
 */

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { alias: aliases },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()],
    minimize: isProd,
  },
  devServer: {
    port: 3000,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      filename: 'index.html',
      minify: { collapseWhitespace: isProd },
      favicon: favicon,
      templateParameters: { analytics: isBuild },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [appleIconPattern],
    }),
  ],
  module: {
    rules: [css, scss, images, fonts, js(), html],
  },
};
