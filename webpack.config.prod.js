'use strict';

const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config');

// CSS 压缩
const optimizeCss = require('optimize-css-assets-webpack-plugin')

// 清除打包路径
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

baseWebpackConfig.plugins.push(
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  new optimizeCss({
    cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
    cssProcessorOptions: { 
      discardComments: { removeAll: true } 
    },
    canPrint: true //是否将插件信息打印到控制台
  })

  /*
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true
    }
  })*/
  //new webpack.optimize.OccurenceOrderPlugin()
)

if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  baseWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = baseWebpackConfig
