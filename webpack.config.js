// config/webpack.config.js
var path = require('path')
var webpack = require('webpack')
var dirSrc = path.resolve(__dirname, './src')
var dirBuild = path.resolve(__dirname, './build')
var embedFileSize = 65536

var __PROD__ = process.env.NODE_ENV === 'production'

var nodeEnv = (__PROD__) ? JSON.stringify('production') : JSON.stringify('development')

// - add
var webpackConfig = {

  entry: {
    bundle: path.resolve(dirSrc, 'index.jsx')
  },
  output: {
    path: dirBuild, // for standalone building
    filename: '[name].js',
    publicPath: '/'

  },
  // webpack-dev-server默认配置项，建议使用
  devServer: {
    contentBase: dirBuild
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: []
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.svg(\?v=[\s\S]+)?$/,
      loader: 'file?name=[name].[ext]!url?limit=' + embedFileSize +
        '&mimetype=image/svg+xml'
    }, {
      test: /\.png$/,
      loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'
    }, {
      test: /\.jpg$/,
      loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'
    }, {
      test: /\.gif$/,
      loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'
    }, {
      test: /\.(otf|eot|ttf|woff|woff2)(\?v=[\s\S]+)?$/,
      loader: 'url?limit=' + embedFileSize
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        NODE_ENV: nodeEnv
      }
    })
  ],
  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx', '.styl']
  },
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}

// Plugins for different environment
if (__PROD__) {
  webpackConfig.plugins.push(
    // cmpress js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
  webpackConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin()
  )
} else {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}


console.log('run webpack with NODE_ENV:' + process.env.NODE_ENV + ',' + nodeEnv)
// console.log("plugins:" + webpackConfig.plugins)

module.exports = webpackConfig
