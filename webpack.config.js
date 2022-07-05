const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		main: './src/main.js',
		libs: './src/libs.js',
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			}
		]
	}
};