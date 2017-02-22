var superagent = require('superagent')
var Promise = require('bluebird')

module.exports = {

	handleGet: function(endpoint, params) {
		return new Promise(function(resolve, reject) {
			superagent
			.get(endpoint)
			.query(params)
//			.set('Accept', 'application/json')
			.end(function(err, res) {
				if (err){ 
					reject(err)
					return
				}

//				console.log('REQUEST: '+JSON.stringify(res))
				resolve(res.text)
			})
		})
	}

}