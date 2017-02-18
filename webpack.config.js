var webpack = require('webpack')
var path = require('path')

module.exports = {

	entry: {
		app: './src/app.js',
		react: ['react', 'react-dom']
	},
	output: {
//		filename: '[name].[hash].js',
		filename: '[name].js',
		path: 'public/dist'
	},
	devtool: '#source-map',
	plugins: process.env.NODE_ENV === 'production' ? [
      // used to split out our sepcified vendor script
		new webpack.optimize.CommonsChunkPlugin({
			name: 'react',
			minChunks: Infinity,
			filename: '[name].js',
		}),
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
		// used to split out our sepcified vendor script
		new webpack.optimize.CommonsChunkPlugin({
			name: 'react',
			minChunks: Infinity,
			filename: '[name].js',
		})
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