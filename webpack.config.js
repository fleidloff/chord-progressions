// todo: babel
// todo: webpack copy plugin
// todo: less / sass for css bundling
// todo: cssnano
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
  	path: __dirname + '/docs',
    filename: 'js/bundle.[hash].js'
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      babelLoader()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new HTMLPlugin({ template: 'src/index.html' }),
    uglifyPlugin()
  ]	
};

function uglifyPlugin() {
    return new UglifyJsPlugin({
        sourceMap: true,
        cache: false,
        uglifyOptions: {
            compress: {
                warnings: false,
                drop_console: true
            },
            output: {
                comments: false
            }
        }
    })
}

function babelLoader() {
    return {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
    };
}
