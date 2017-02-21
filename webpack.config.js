var webpack = require('webpack')
var path = require('path')

module.exports = {

	entry: {
//		react: ['react', 'react-dom'],
		app: './src/app.js'
	},
	output: {
		filename: 'bundle.js',
		path: 'public/dist'
	},
	devtool: '#source-map',
	plugins: process.env.NODE_ENV === 'production' ? [
		// new webpack.optimize.CommonsChunkPlugin({ // used to split out our sepcified vendor script
		// 	name: 'react',
		// 	minChunks: Infinity,
		// 	filename: '[name].js',
		// }),
	    new webpack.DefinePlugin({
	        'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	        }
	    }),
    	new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
		    compress: {
		        warnings: true
		    }
    	})
	] : [
		// new webpack.optimize.CommonsChunkPlugin({ // used to split out our sepcified vendor script
		// 	name: 'react',
		// 	minChunks: Infinity,
		// 	filename: '[name].js',
		// })
	],	
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}

}