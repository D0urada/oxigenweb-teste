const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
	mode: 'production',
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/template.html',
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	}
});