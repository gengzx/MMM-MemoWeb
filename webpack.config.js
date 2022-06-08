'use strict';

var path = require('path')
var webpack = require('webpack')
var fs = require('fs')

//var autoprefixer = require('autoprefixer');

// 控制台美化
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var _dashboard = new Dashboard();

//var ExtractTextPlugin = require('extract-text-webpack-plugin'); // webpack 4 被废弃 由 mini-css-extract-plugin 代替
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var src = path.resolve(__dirname, 'src'); // 源码目录
var dist = path.resolve(__dirname, 'build'); // build 后输出目录


module.exports = {
	// 页面入口配置
	entry: {
		app: './src/index.js',// 应用加载入口
		//vendor: ['./static/plugins/jquery.min.js'],
		commons: ['./src/utils'] // 提取公共文件
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name:"vendors"
				}
			}
		}
	},

	// 页面输出配置
	output: {
		libraryTarget: 'var',
		pathinfo: true,
		path: dist,
		//publicPath: '/build/',
		filename: 'script/[name].[chunkhash:8].js',
		chunkFilename: 'script/chunks/[name].[chunkhash:8].js' // 按需加载
	},
	// 加载器
	module: {
		rules: [
			{
				// 加载 jsx文件 转换 es2015(es6) js文件
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader',//更多配置在.babelrc
				exclude: /(node_modules|bower_components)/
			},
			{
				// 加载css文件
				test: /\.css$/,
				// loader: 'style-loader!css-loader'
				//loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
				use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
			},
			{
				// 加载 less文件 (不使用css modules)
				test: /\.less$/,
				//loader: 'style-loader!css-loader!less-loader'
				//loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
				use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", { loader: "less-loader", options: {javascriptEnabled: true} }, "postcss-loader"]
			}
			, {
				// 加载外其他文件
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				//loader: 'url-loader?limit=2&name=images/[name].[ext]?[hash]'
				use: [{loader: 'file-loader',
					options: {
						name: '[name].[ext]?[hash:8]',
						publicPath: '../images',
						outputPath: 'images'
					}
				}]
			}, {
				// 加载配置文件
				test: /config.js/,
				loader: 'file-loader?name=script/[name].[ext]',
				exclude: /(node_modules|bower_components)/
			}

			/*
				  {
					test(filePath) {
					  return /\.css$/.test(filePath) && !/\.module\.css$/.test(filePath);
					},
					loader: ExtractTextPlugin.extract(
					  `${require.resolve('css-loader')}` +
					  `?sourceMap&-restructuring&-autoprefixer!${require.resolve('postcss-loader')}`,
					)
				  },
				  {
					test: /\.module\.css$/,
					loader: ExtractTextPlugin.extract(
					  `${require.resolve('css-loader')}` +
					  `?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!` +
					  `${require.resolve('postcss-loader')}`
					)
				  },
				  {
					test(filePath) {
					  return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath);
					},
					loader: ExtractTextPlugin.extract(
					  `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
					  `${require.resolve('postcss-loader')}!` +
					  `${require.resolve('less-loader')}?{"sourceMap":true}`
					)
				  },
				  {
					test: /\.module\.less$/,
					loader: ExtractTextPlugin.extract(
					  `${require.resolve('css-loader')}?` +
					  `sourceMap&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!` +
					  `${require.resolve('postcss-loader')}!` +
					  `${require.resolve('less-loader')}?` +
					  `{"sourceMap":true}`
					)
				  }
			*/

		]
	},

	resolve: {
		//root: src, //绝对路径
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['.js', '.jsx', '.less'],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			'@': path.join(__dirname, './src/'),//@ 指向 src 目录
			components: path.join(__dirname, './src/components/'),
			utils: path.join(__dirname, './src/utils'),
			action: path.join(__dirname, './src/redux/modules'),
			//jquery: path.join(__dirname, './static/plugins/jquery.min.js')
		}
	},



	plugins: [


		// new DashboardPlugin(_dashboard.setData),
		/*
			new webpack.LoaderOptionsPlugin({
			  options: {
				// 配置css浏览器前缀 兼容不同浏览器
				postcss: [
				  autoprefixer({
					browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
				  })
				]
			  }
			}),
		*/

		new webpack.optimize.ModuleConcatenationPlugin(),
		/*
		new webpack.optimize.CommonsChunkPlugin({ 
		  names: ['commons','vendor'], 
		  filename: 'script/[name].bundle.[chunkhash:8].js', 
		  minChunks: Infinity 
		}),*/

		//  new ExtractTextPlugin('[name].[chunkhash:8].css'),
		new MiniCssExtractPlugin({
			filename: "css/[name].[chunkhash:8].css",
			chunkFilename: "css/[name].[chunkhash:8].css"
		}),

		new HtmlWebpackPlugin({
			title: '魔镜备忘',
			filename: 'index.html',
			favicon: './static/images/favicon.ico',
			template: './src/index.html'
		})
	]

}
