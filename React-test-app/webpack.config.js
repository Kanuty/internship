const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', './src/index.js',],
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};