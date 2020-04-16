const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')

const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.config')

module.exports = webpackMerge(commonConfig, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin({
			verbose: true,
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					parser: safePostCssParser,
					map: false,
				},
			}),
		],
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			minChunks: 1,
			automaticNameDelimiter: '_',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10,
					reuseExistingChunk: true,
				},
				// Chunk that contains used polyfills
				polyfills: {
					test: /core-js/,
					name: 'polyfills',
					priority: 10,
					reuseExistingChunk: true,
				},
			},
		},
		runtimeChunk: {
			name: 'runtime',
		},
	},
})
