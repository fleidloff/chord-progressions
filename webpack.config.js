// todo: babel
// todo: webpack copy plugin
// todo: webpack uglify plugin
// todo: less / sass for css bundling
// todo: cssnano
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
  	path: __dirname + '/docs',
    filename: 'js/bundle.[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HTMLPlugin({ template: 'src/index.html' })
  ]
};