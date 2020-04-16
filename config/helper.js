/*
 * Helper file for resolve webpack config options/functions
 */

const path = require('path')

const ROOT = path.resolve(__dirname, '..')

module.exports = {
	rootPath: path.join.bind(path, ROOT),
}
