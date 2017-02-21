var Module = require('../models/Module')
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

			Module.find(params, null, {limit:parseInt(limit), sort:{timestamp: sortOrder}}, function(err, modules){
				if (err){
					reject(err)
					return
				}

				if (isRaw == true){
					resolve(modules)
					return
				}

				resolve(utils.Resource.convertToJson(modules))
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){
			Module.findById(id, function(err, module){
				if (err){
					reject(err)
					return
				}

				if (module == null){
					reject(new Error('Module Not Found'))
					return
				}

				if (isRaw){
					resolve(module)
					return
				}

				resolve(module.summary())
			})
		})
	},

	post: function(params, token){
		return new Promise(function(resolve, reject){
			if (params.slug == null) // might already be assigned
				params['slug'] = utils.TextUtils.slugVersion(params.name)+'-'+utils.TextUtils.randomString(6).toLowerCase()

			Module.create(params, function(err, module){
				if (err){
					reject(err)
					return
				}

				resolve(module.summary())
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
			Module.findByIdAndRemove(id, function (err){
			    if (err) { 
					reject(err)
					return
			    }

			    resolve()
			})
		})
	}

}

