var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: "eval",

  // Set entry point to ./src/main and include necessary files for hot load
  entry:  [
    "webpack-dev-server/client?http://localhost:9090",
    "./src/main"
  ],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: __dirname + "/docs/",
    filename: "app.js",
    publicPath: "http://localhost:9090/docs/"
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1!postcss-loader')
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192' }
    ]
  },

  // Automatically transform files with these extensions
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.css']
  },

  // Additional plugins for CSS post processing using postcss-loader
  postcss: [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('postcss-focus')(), //add a :focus to every :hover
    require("postcss-reporter")({ clearMessages: true })
  ]

}
