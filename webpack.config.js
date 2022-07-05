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
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
};