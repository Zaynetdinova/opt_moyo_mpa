const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

// подумать
// options: {
// 	publicPath: path.resolve(__dirname, 'dist')
// },

const cssLoaders = (extra) => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
		},
		'css-loader'
	]

	if(extra) {
		loaders.push(extra)
	}

	return loaders
}



const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if(isProd) {
		config.minimizer = [
			new OptimizeCssAssetPlugin(),
			new TerserWebpackPlugin()
		]
	}

	return config
}

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		filename: '[name][hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [

		new HTMLWebpackPlugin({
			filename: 'views/index.html',
			template: './views/index.html'
		}),
		new HTMLWebpackPlugin({
			filename: 'views/information/aboutSizePage.html',
			template: './views/information/aboutSizePage.html'
		}),

		new CleanWebpackPlugin(),

		new MiniCssExtractPlugin({
			filename: '[name][hash].css'
		})
	],
	optimization: optimization(),
	devServer: {
		port: 4200,
		open: true,
		hot: isDev
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders()
			},
			{
				test: /\.(sass|scss)$/,
				use: cssLoaders('sass-loader')
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				use: ['file-loader']
			},

			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
					},
				}
			}

		]
	}
}