const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js',
		vendor: './src/vendor.js',
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