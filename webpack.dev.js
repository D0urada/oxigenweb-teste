const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: {
		  directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
	  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	],
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.scss$/,
	// 			use: [
	// 				'style-loader', 	// tird: inject styles into DOM
	// 				'css-loader', 		// second: turns css into common js
	// 				'sass-loader' 		// first: turns sass into css
	// 			]
	// 		}
	// 	]
	// }
});