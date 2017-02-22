var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var Request = require('../utils/Request')

router.get('/:site', function(req, res, next){
	var site = req.params.site

	var js = ''

	controllers.site
	.getById(site, false)
	.then(function(site){
		var react = 'http://54.158.144.8/dist/react/react-react-dom.min.js'
		return Request.handleGet(react)
	})
	.then(function(text){
		js += text
		var url = 'https://thevarsity.s3.amazonaws.com/HGoxdM0x-bundle.7989f1b2e676f47baa2f.js'
		return Request.handleGet(url)

	})
	.then(function(text){
		js += text
//		console.log(text)
//		res.send("console.log('HELLO " + site.name + "')")

		res.setHeader('Content-Type', 'text/javascript')
		res.send(js)
	})
	.catch(function(err){
		res.send('ERROR: '+err.message)
	})



})

module.exports = router