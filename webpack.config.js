const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: 'web',
  // webpack will take the files from ./src/index
  entry: './src/index.tsx',
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    publicPath: path.resolve(__dirname, 'public'),
    path: path.resolve(__dirname, 'build'),
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: {
      '~': path.resolve('./src/'),
      '@': path.resolve('./src/'),
      '@modules': path.resolve('./src/modules/'),
      '@pages': path.resolve('./src/pages/'),
      '@layouts': path.resolve('./src/layouts/'),
      '@themes': path.resolve('./src/themes/'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
    },
  },

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      //use url loader to import images
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    watchContentBase: true,
    compress: true,
    hot: true,
    port: 3000,
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/**/*", to: "" },
      ],
    })
  ],
};
