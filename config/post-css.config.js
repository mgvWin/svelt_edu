const METADATA = require('./metadata')

module.exports = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		plugins: () => [
			require('autoprefixer'),
			require('postcss-flexbugs-fixes'),
			require('postcss-preset-env')({ browsers: 'last 6 versions' }),
			require('cssnano')(),
		],
		sourceMap: METADATA.DEV,
	},
}
