var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:site', function(req, res, next){
	var site = req.params.site

	controllers.site
	.getById(site, false)
	.then(function(site){
		res.setHeader('Content-Type', 'text/javascript')
		res.send("console.log('HELLO " + site.name + "')")

	})
	.catch(function(err){
		res.send('ERROR: '+err.message)
	})



})

module.exports = router