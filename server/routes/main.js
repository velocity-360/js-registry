var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
	if (req.session == null){
		res.redirect('/register')
		return
	}

	if (req.session.site == null){
		res.redirect('/register')
		return
	}

	res.render('index', null)

})

router.get('/:page', function(req, res, next){

	res.render(req.params.page, null)

})

module.exports = router