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

		res.json({
			confirmation: 'success',
			site: req.session.site
		})


	}


})


router.post('/:action', function(req, res, next){
	
	console.log('TEST 1: '+req.params.action)
	if (req.params.action == 'register'){ // for now, have this create a site
		console.log('TEST 2')
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