const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.config')

const helper = require('./helper')
const METADATA = require('./metadata')

module.exports = webpackMerge(commonConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		port: METADATA.PORT,
		contentBase: helper.rootPath('dist'),
		compress: true,
		hot: true,
		watchOptions: {
			// if you're using Docker you may need this
			// aggregateTimeout: 300,
			// poll: 1000,
			ignored: /node_modules/,
		},
		open: true,
		historyApiFallback: true,
	},
})
