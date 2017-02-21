var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:action', function(req, res, next){

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
			console.log('TEST 3')
			req.session.site = result.id
			res.redirect('/')
			// res.json({
			// 	confirmation: 'success',
			// 	result: result
			// })

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

})

module.exports = router