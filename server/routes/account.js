var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:action', function(req, res, next){

	if (req.params.action == 'logout') {
		req.session.reset()
		res.redirect('/')
		return
	}

	if (req.params.action == 'currentuser') {

		if (req.session == null){
			res.json({
				confirmation: 'success',
				user: null
			})

			return
		}

		if (req.session.site == null){
			res.json({
				confirmation: 'success',
				user: null
			})

			return
		}

		var controller = controllers.site
		controller
		.getById(req.session.site, false)
		.then(function(result){
			res.json({
				confirmation: 'success',
				site: result
			})
		})
		.catch(function(err){
			req.session.reset()
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
	}


})


router.post('/:action', function(req, res, next){
	
	if (req.params.action == 'register'){ // for now, have this create a site
		var controller = controllers.site

		controller
		.post(req.body, null)
		.then(function(result){
			req.session.site = result.id
			res.redirect('/')
			return
		})
		.catch(function(err){
			res.json({
				confirmation: 'fail',
				message: err
			})

			return
		})
	}

	if (req.params.action == 'login'){
		console.log('LOGIN: '+JSON.stringify(req.body))

		var controller = controllers.site
		controller.get({url: req.body.url}, null)
		.then(function(results){
			if (results.length == 0){
				throw new Error(req.body.url+' not found.')
				return
			}

			var result = results[0]
			req.session.site = result.id
			res.redirect('/')
			return
		})
		.catch(function(err){
			res.json({
				confirmation: 'fail',
				message: err.message
			})

			return
		})
	}
})

module.exports = router