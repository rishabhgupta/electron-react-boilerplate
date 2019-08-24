const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  externals: nodeModules,
  entry: [
    './src/index.js'
  ],
  target: 'node',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: 'babel-loader',
        // more options in the optional jshint object
        options: {  // ⬅ formally jshint property
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 4172
  }
};
