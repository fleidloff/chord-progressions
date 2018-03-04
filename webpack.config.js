// todo: babel
// todo: webpack copy plugin
// todo: less / sass for css bundling
// todo: cssnano
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? 'cheap-module-source-map' : 'source-map',
  entry: './src/js/app.js',
  output: {
  	path: __dirname + '/docs',
    filename: isProd ? 'js/bundle.[hash].js' : 'js/bundle.js'
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      babelLoader(),
      styleLoader()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new ExtractTextPlugin("style/style.[hash].css"),
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

function styleLoader() {
    return {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([
            "css-loader?{autoprefixer:{add:true,browsers:['> 1% in DE', 'ie > 10']}}",
            "less-loader"
        ])
    }
}
