var express = require('express')
var router = express.Router()

router.get('/:site', function(req, res, next){
	var site = req.params.site

	res.setHeader('Content-Type', 'text/javascript')
	res.send("console.log('HELLO WORLD!')")

})

module.exports = router