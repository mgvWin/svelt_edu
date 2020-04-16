const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const helper = require('./helper')
const METADATA = require('./metadata')
const postCssConfig = require('./post-css.config')

module.exports = {
	output: {
		path: helper.rootPath('dist'),
		filename: '.bundle.js',
		chunkFilename: '[name].[id].js',
	},
	entry: {
		bundle: [helper.rootPath('src', 'main.js')],
	},
	resolve: {
		alias: {
			svelte: helper.rootPath('node_modules', 'svelte'),
			'@Components': helper.rootPath('src', 'Components', 'Components.svelte'),
			'@Pages': helper.rootPath('src', 'Pages', 'Pages.svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						preprocess: require('svelte-preprocess')({
							postcss: postCssConfig.options,
							scss: true,
							devtool: true,
						}),
					},
				},
			},
			{
				test: /\.(sass|(s*)css)$/,
				use: [
					METADATA.DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					postCssConfig,
					'sass-loader',
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
}
