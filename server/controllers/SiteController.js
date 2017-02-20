var Site = require('../models/Site')
var utils = require('../utils')
var Promise = require('bluebird')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			var sortOrder = (params.sort == 'asc') ? 1 : -1
			delete params['sort']

			/* Query by filters passed into parameter string: */
			var limit = params.limit
			if (limit == null)
				limit = '0'
			
			delete params['limit']

			Site.find(params, null, {limit:parseInt(limit), sort:{timestamp: sortOrder}}, function(err, sites){
				if (err){
					reject(err)
					return
				}

				if (isRaw == true){
					resolve(sites)
					return
				}

				resolve(utils.Resource.convertToJson(sites))
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){
			Site.findById(id, function(err, site){
				if (err){
					reject(err)
					return
				}

				if (isRaw){
					resolve(site)
					return
				}

				resolve(site.summary())
			})
		})
	},

	post: function(params){
		return new Promise(function(resolve, reject){
			// if (params.slug == null) // might already be assigned
			// 	params['slug'] = utils.TextUtils.slugVersion(params.title) + '-' + utils.TextUtils.randomString(6)

			Site.create(params, function(err, site){
				if (err){
					reject(err)
					return
				}

				resolve(site.summary())
			})
		})
	},

	// put: function(id, params, token){
	// 	return new Promise(function(resolve, reject){
	// 		if (token == null){
	// 			reject({message: 'Unauthorized'})
	// 			return
	// 		}

	// 		utils.JWT.verify(token, process.env.TOKEN_SECRET)
	// 		.then(function(decode){
	// 			var userId = decode.id
	// 			console.log('USER ID: '+userId)
	// 			// TODO: check if user is authorized to change post

	// 			Post.findByIdAndUpdate(id, params, {new:true}, function(err, post){
	// 				if (err){
	// 					reject(err)
	// 					return
	// 				}

	// 				resolve(post.summary())
	// 			})
	// 		})
	// 		.catch(function(err){
	// 			reject(err)
	// 			return
	// 		})
	// 	})
	// },

	delete: function(id){
		return new Promise(function(resolve, reject){
			Site.findByIdAndRemove(id, function (err){
			    if (err) { 
					reject(err)
					return
			    }

			    resolve()
			})
		})
	}

}

