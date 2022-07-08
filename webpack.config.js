const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //this plugin is used in production so that the css is loaded apart from the javascript
const webpack = require("webpack");

module.exports = {
	entry: {
		main: './src/main.js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		})
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
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 	// tird: extract css into files
					'css-loader', 		// second: turns css into common js
					'sass-loader' 		// first: turns sass into css
				]
			},
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			}
		]
	}
};